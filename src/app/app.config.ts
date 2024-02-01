import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient, withFetch, withInterceptors} from "@angular/common/http";
import { provideAnimations } from '@angular/platform-browser/animations';
import {httpManagerInterceptor} from "./share/interceptors/http-manager.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch()), provideAnimations(),
    provideHttpClient(withInterceptors([httpManagerInterceptor]))
  ]
};
