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
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home/sponsors', component: SponsorsteaserComponent, data: {animation: 'home/sponsors'} },
  { path: 'home/awards', component: AwardteaserComponent, data: {animation: 'home/awards'} },
  { path: 'home/photos', component: PhototeaserComponent, data: {animation: 'home/photos'} },
  { path: 'home/contact', component: ContactteaserComponent, data: {animation: 'home/contact'}},
  { path: 'awards', component: AwardsComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'contact', component: ContactusComponent },
  { path: '**', component: EmptyComponent }
];
export const appRouting = RouterModule.forRoot(routes, {
  useHash: true
});