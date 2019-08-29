import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FigureReducer } from './figure.reducer';
import { FigureOptionComponent } from './figure-option/figure-option.component';
import { FigureDisplayComponent } from './figure-display/figure-display.component';
import { SelectTagComponent } from './components/select-tag/select-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    FigureOptionComponent,
    FigureDisplayComponent,
    SelectTagComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ figure: FigureReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
