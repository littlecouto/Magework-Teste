import { NgModule } from '@angular/core';
import { ForNumberPipe } from './fornumbers.pipe';

@NgModule({
    imports: [],
    declarations: [ForNumberPipe],
    exports: [ForNumberPipe],
})

export class ForNumbersModule {

  static forRoot() {
     return {
         ngModule: ForNumbersModule,
         providers: [],
     };
  }
}
