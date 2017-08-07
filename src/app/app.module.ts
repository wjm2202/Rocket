import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './approutes/routes';
import { TccOwlCarouselDirective } from 'tcc-ng-owl-carousel';
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
import { FullwidthComponent } from './fullwidth/fullwidth.component';
//bootstrap stuff here
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { EmptyComponent } from './empty/empty.component';
import { WaterwheelComponent } from './waterwheel/waterwheel.component';

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
    FullwidthComponent,
    EmptyComponent,
<<<<<<< HEAD
=======
    WaterwheelComponent,
    TccOwlCarouselDirective

>>>>>>> 9af1a989491589e12c57d2742129bffe6346e51b

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
