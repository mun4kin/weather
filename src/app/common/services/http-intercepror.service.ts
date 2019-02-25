import { Inject } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { delay, filter } from 'rxjs/operators';


export class HttpInterceprorService implements HttpInterceptor {

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private _baseUrl: string
  ) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    const jsonReq = req.clone({ url: `${this._baseUrl}${req.url}`});
    return next.handle(jsonReq).pipe(
      filter(this._isHttpResponse),
    delay(1000)
    );
  }

  private _isHttpResponse(event: HttpEvent<any>): event is HttpResponse<any> {
    return(event instanceof HttpResponse);
  }
}

