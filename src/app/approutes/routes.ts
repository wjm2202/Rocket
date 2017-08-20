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
import { GalleryComponent } from '../gallery/gallery.component';
import { ImageDetailComponent } from '../image-detail/image-detail.component';
import { RouterModule } from '@angular/router';

const routes = [
  
  { path: 'awards', component: AwardsComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'photos/:id', component: ImageDetailComponent },
  { path: 'contact', component: ContactusComponent },
  { path: '**', component: EmptyComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}

];
export const appRouting = RouterModule.forRoot(routes, {
  useHash: false
});