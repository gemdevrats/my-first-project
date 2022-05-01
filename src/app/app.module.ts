import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { DirectiveCompComponent } from './directive-comp/directive-comp.component';
import { PipeCompComponent } from './pipe-comp/pipe-comp.component';
import { PiperPipe } from './piper.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    DirectiveCompComponent,
    PipeCompComponent,
    PiperPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
