//angular components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { appRouting } from './approutes/routes';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//my components
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
import { AwardComponent } from './award/award.component'; 
import { EmptyComponent } from './empty/empty.component';
import { RightcontactComponent } from './rightcontact/rightcontact.component';
import { LeftcontactComponent} from './leftcontact/leftcontact.component';
//services
import { GetawardsService } from './services/getawards.service';
import { GetMainSponsorService } from './services/getSponsor.service';
import { ImageService } from './services/Image.Service';
import { AwardsSearchService } from './services/awards-search.service';
import { SponsorOpService } from './services/SponsorOp.service';
//pipes
import { UrlStrip } from './pipes/imagestrip';
import { ImageFilterPipe } from './pipes/filter.pipe';
import { AwardLevelPipe } from './pipes/filterAwards.pipe';
//bootstrap stuff here
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AwardteaserComponent } from './awardteaser/awardteaser.component';
import { SponsorsteaserComponent } from './sponsorsteaser/sponsorsteaser.component';
import { PhototeaserComponent } from './phototeaser/phototeaser.component';
import { ContactteaserComponent } from './contactteaser/contactteaser.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';

import { BecomesponsorComponent } from './becomesponsor/becomesponsor.component';

import { SearchComponent } from './search/search.component';
import { AwardDetailComponent } from './award-detail/award-detail.component';
import { SponsorCaraComponent } from './sponsor-cara/sponsor-cara.component';

import { SignsponsorComponent } from './signsponsor/signsponsor.component';
//material design module
import { MaterialModule } from '@angular/material';
//third party modules
import { MasonryModule } from 'angular2-masonry';



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
    AwardComponent,
    PhotosComponent,
    ContactusComponent,
    FooterComponent,
    FullwidthComponent,
    EmptyComponent,
    AwardteaserComponent,
    SponsorsteaserComponent,
    PhototeaserComponent,
    ContactteaserComponent,
    UrlStrip,
    GalleryComponent,
    ImageDetailComponent,
    ImageFilterPipe,
    RightcontactComponent,
    LeftcontactComponent,
    BecomesponsorComponent,
    SearchComponent,
    AwardDetailComponent,
    AwardLevelPipe,
    SponsorCaraComponent,
    SignsponsorComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
    CarouselModule.forRoot(),
    appRouting,
    MaterialModule,
    MasonryModule

  ],
  providers: [ImageService, ImageFilterPipe, AwardsSearchService, AwardLevelPipe, SponsorOpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
