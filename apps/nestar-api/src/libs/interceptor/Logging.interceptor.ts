import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from "@nestjs/common";
import { GqlContextType, GqlExecutionContext } from "@nestjs/graphql";
import { stringify } from "querystring";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {

    private readonly logger: Logger = new Logger();

    public intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

        const recordTime = Date.now();
        const requestType = context.getType<GqlContextType>();

        if (requestType === 'http') {
            // develop if needed
        } else if (requestType === 'graphql') {
            /* (1) Print Request */
            const gqlContext = GqlExecutionContext.create(context)
            this.logger.log(`${this.sliceString(gqlContext.getContext().req.body)}`, "REQUEST")

            /* (2) Error handling via GraphQL */
            /* (3) If No Error occurs, will return below Response */

            return next.handle().pipe(
                tap((context) => {
                    const responseTime = Date.now() - recordTime
                    this.logger.log(`${this.sliceString(context)} - ${responseTime}ms \n\n`, "RESPONSE")
                })
            )
        }
    }

    private sliceString(context: ExecutionContext): string {
        return JSON.stringify(context).slice(0, 75)
    }
}