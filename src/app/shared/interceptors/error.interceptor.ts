import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap, delay, retryWhen } from 'rxjs/operators';

import { ModalService } from 'src/app/core/services/modal.service';

export const maxRetries = 2;
export const delayMs = 2000;

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private modalService: ModalService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            retryWhen((error: Observable<any>): Observable<any> => {
                return error.pipe(
                    mergeMap((error, index) => {
                        if (index < maxRetries && error.status == 500) {
                            return of(error).pipe(delay(delayMs));
                        }

                        this.modalService.open({ body: 'Something went wrong!' });

                        throw error;
                    })
                );
            })
        );
    }
}
