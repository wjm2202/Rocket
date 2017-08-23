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
  { path: 'awards', component: AwardsComponent },
  { path: 'sponsors', component: SignsponsorComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'photos/:id', component: ImageDetailComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'awards/search', component: SearchComponent },
  { path: 'awards/search/award/:id', component: AwardDetailComponent, pathMatch: 'full' },
  { path: '**', component: EmptyComponent },
  

];
export const appRouting = RouterModule.forRoot(routes, {
  useHash: false
});