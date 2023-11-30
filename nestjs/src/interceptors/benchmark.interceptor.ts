import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class BenchmarkInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const t0 = performance.now();
    return next
      .handle()
      .pipe(
        tap(() => {
            const t1 = performance.now();
            console.log(`Request took ${t1 - t0} milliseconds.`)
        }),
      );
  }
}