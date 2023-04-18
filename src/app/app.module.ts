import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FiltersComponent } from './filters/filters.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { StaysComponent } from './stays/stays.component';
import { StayPageComponent } from './stays/stay-page/stay-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { StopBodyScrollDirective } from './stop-body-scroll.directive';
import { WishlistComponent } from './wishlist/wishlist.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    StaysComponent,
    StayPageComponent,
    MapComponent,
    FooterComponent,
    SignupComponent,
    StopBodyScrollDirective,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    HammerModule,
    LeafletModule,
    MatSliderModule,
    FormsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
