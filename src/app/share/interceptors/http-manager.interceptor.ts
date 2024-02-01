import {HttpEvent, HttpInterceptorFn} from '@angular/common/http';
import {catchError, Observable, throwError} from "rxjs";
import {inject} from "@angular/core";
import {CookieManagerService} from "../services/cookieService/cookie-manager.service";
import {Router} from "@angular/router";
import {log} from "util";

export const httpManagerInterceptor: HttpInterceptorFn = (
    req, next
):Observable<HttpEvent<any>> => {

  const cookieService = inject(CookieManagerService);
  const router = inject(Router);



  req = req.clone({
    setHeaders:{Authorization:cookieService.getToken()}
  })

  return next(req).pipe(

      catchError(err => {
        if(err.status == 403){
          router.navigate(['/']);
        }
        return throwError(err);
      })
  );



};
