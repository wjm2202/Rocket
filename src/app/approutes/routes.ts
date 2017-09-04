import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';
import { SponsorsComponent } from '../sponsors/sponsors.component';
import { AwardsComponent } from '../awards/awards.component';
import { PhotosComponent } from '../photos/photos.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { EmptyComponent } from '../empty/empty.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { ImageDetailComponent } from '../image-detail/image-detail.component';
import { SearchComponent } from '../search/search.component';
import { AwardDetailComponent } from '../award-detail/award-detail.component';
import { SignsponsorComponent } from '../signsponsor/signsponsor.component';



const routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'awards', component: AwardsComponent },
  { path: 'sponsors/all', component: SignsponsorComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'photos/:id', component: ImageDetailComponent },
  { path: 'contact', component: ContactusComponent  },
  { path: 'awards/search', component: SearchComponent },
  { path: 'awards/search/award/:id', component: AwardDetailComponent },
  { path: '**', component: EmptyComponent },
  

];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);