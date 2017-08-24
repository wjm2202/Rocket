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
import { SearchComponent } from '../search/search.component';
import { AwardDetailComponent } from '../award-detail/award-detail.component';
import { SignsponsorComponent } from '../signsponsor/signsponsor.component';
import { RouterModule } from '@angular/router';


const routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'awards', component: AwardsComponent , pathMatch: 'full'},
  { path: 'sponsors', component: SignsponsorComponent , pathMatch: 'full'},
  { path: 'photos', component: PhotosComponent, pathMatch: 'full' },
  { path: 'photos/:id', component: ImageDetailComponent , pathMatch: 'full'},
  { path: 'contact', component: ContactusComponent , pathMatch: 'full'},
  { path: 'awards/search', component: SearchComponent, pathMatch: 'full' },
  { path: 'awards/search/award/:id', component: AwardDetailComponent, pathMatch: 'full' },
  { path: '**', component: EmptyComponent },
  

];
export const appRouting = RouterModule.forRoot(routes, {
  useHash: false
});