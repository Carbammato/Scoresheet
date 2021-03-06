import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
	providedIn: "root",
})
export class InterceptorService implements HttpInterceptor {
	constructor(private _auth: AuthService) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (!request.headers.has("Content-Type")) {
			request = request.clone({ headers: request.headers.set("Content-Type", "application/json") });
		}

		const accessToken = this._auth.accessToken;
		if (accessToken && accessToken.length > 0)
			request = request.clone({ headers: request.headers.set("Accept", "application/json") }).clone({
				setHeaders: {
					Authorization: `Bearer ${accessToken}`,
				},
			});

		return next.handle(request);
	}
}
