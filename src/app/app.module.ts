import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { BurgerComponent } from './burger/burger.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { AwardsComponent } from './awards/awards.component';
import { PhotosComponent } from './photos/photos.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { EventCarouselComponent } from './event-carousel/event-carousel.component';
import { EventSliderComponent } from './event-slider/event-slider.component';
import { SafeHtmlPipe } from './pipes/safe-html-pipe.pipe';
import { ImageShowComponent } from './image-show/image-show.component';
import { printSlide } from './pipes/safe-html-pipe.pipe';
import { FullwidthComponent } from './fullwidth/fullwidth.component';
//bootstrap stuff here
import { AlertModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    BurgerComponent,
    SponsorsComponent,
    AwardsComponent,
    PhotosComponent,
    ContactusComponent,
    FooterComponent,
    EventCarouselComponent,
    EventSliderComponent,
    SafeHtmlPipe,
    printSlide,
    ImageShowComponent,
    FullwidthComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    AlertModule.forRoot(),
    CarouselModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
