import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
      private router: Router;
      constructor(inject: Injector) {
            this.router = inject.get(Router);
      }
      handleError(error) {
            console.log(error);
            this.router.navigate(['/login']);
            alert("Something went wrong!");
      }
}