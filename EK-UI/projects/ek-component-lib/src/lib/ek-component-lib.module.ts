import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';


import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselModule } from "ngx-carousel-lib";
import { EkComponentLibComponent } from './ek-component-lib.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';



@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    SlickCarouselModule
  ],
  declarations: [EkComponentLibComponent, CardComponent, CardListComponent],
  exports: [EkComponentLibComponent,CardComponent,CardListComponent]
})
export class EkComponentLibModule { }
