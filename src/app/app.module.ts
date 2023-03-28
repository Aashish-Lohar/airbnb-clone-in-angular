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
import { CalendarComponent } from './calendar/calendar.component';
import { IgxCalendarModule, IgxSnackbarModule, IgxDialogModule,IgxButtonModule, IgxProgressBarModule } from 'igniteui-angular';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    StaysComponent,
    StayPageComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    HammerModule,
    IgxCalendarModule,
	  IgxSnackbarModule,
    IgxDialogModule,
    IgxButtonModule,
    IgxProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
