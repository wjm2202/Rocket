
import { ImageService } from '../services/Image.Service';
import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
  title = 'Recent Photos';
  @Input() filterBy?: string = 'all';     //? is optional
  visableImages: any[] = [];
  //Onchanges is a life cycle hook called when something changes
  constructor(private imageService: ImageService) {
    this.visableImages = this.imageService.getImages();
   }
   ngOnChanges(){
     this.visableImages = this.imageService.getImages();
   }

}
