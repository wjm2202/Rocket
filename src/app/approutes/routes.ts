import { Routes } from '@angular/router';
import { BackgroundComponent } from '../background/background.component';
import { SponsorsComponent } from '../sponsors/sponsors.component';
import { AwardsComponent } from '../awards/awards.component';
import { PhotosComponent } from '../photos/photos.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { EmptyComponent } from '../empty/empty.component';

export const appRoutes: Routes = [
  
  { path: 'home/sponsors', component: SponsorsComponent },
  { path: 'home/awards', component: AwardsComponent },
  { path: 'home/photos', component: PhotosComponent },
  { path: 'home/contact', component: ContactusComponent },
  { path: '**', component: EmptyComponent }
];