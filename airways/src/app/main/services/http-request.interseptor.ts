import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";

@Injectable()
export class AuthIntercepted implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<Object>> {
    let authReq = req;
    return next.handle(authReq).pipe(catchError(error => {
      return throwError(error);
    }));
  }
}
export const INTERCEPTOR_PROVIDER:Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthIntercepted,
  multi: true
};
