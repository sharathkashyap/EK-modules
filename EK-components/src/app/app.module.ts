import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './shared/components/card/card.component';
import { CardListComponent } from './shared/components/card-list/card-list.component';
import {SuiModule} from 'ng2-semantic-ui';
import { SlickModule } from 'ngx-slick';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    SlickModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
