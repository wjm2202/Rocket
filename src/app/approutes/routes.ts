import { Routes } from '@angular/router';
import { BackgroundComponent } from '../background/background.component';
import { SponsorsComponent } from '../sponsors/sponsors.component';
import { AwardsComponent } from '../awards/awards.component';
import { PhotosComponent } from '../photos/photos.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { EmptyComponent } from '../empty/empty.component';
import { AwardteaserComponent } from '../awardteaser/awardteaser.component';
import { SponsorsteaserComponent } from '../sponsorsteaser/sponsorsteaser.component';
import { PhototeaserComponent } from '../phototeaser/phototeaser.component';
import { ContactteaserComponent } from '../contactteaser/contactteaser.component';

export const appRoutes: Routes = [
  { path: 'home/sponsors', component: SponsorsteaserComponent },
  { path: 'home/awards', component: AwardteaserComponent },
  { path: 'home/photos', component: PhototeaserComponent },
  { path: 'home/contact', component: ContactteaserComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'contact', component: ContactusComponent },
  { path: '**', component: EmptyComponent }
];