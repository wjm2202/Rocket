import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Image } from '../interfaces/image';
import "rxjs/Rx";

@Injectable()
export class ImageService {

    constructor(private http: Http) { }

    getImagesHttp() {
        return this.http
            .get('https://webservices-test.aut.ac.nz/ecms/api/photos')
            .map((response: Response) => {
                return <Image[]>response.json();
            })
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }



    visableImages = [];
    getImages() {
        return this.visableImages = IMAGES.slice(0);   //take from index 0 to end
    }
    getImage(id: number) {
        //get the image from the array that matches the id given
        return IMAGES.slice(0).find(image => image.id == id);  // find image matches id
    }
}

const IMAGES = [
    { "id": 1, "category": "event", "caption": "the image title", "url": "assets/images/1.jpg" },
    { "id": 2, "category": "event", "caption": "the image title", "url": "assets/images/2.jpg" },
    { "id": 3, "category": "event", "caption": "the image title", "url": "assets/images/3.jpg" },
    { "id": 4, "category": "student", "caption": "the image title", "url": "assets/images/4.jpg" },
    { "id": 5, "category": "student", "caption": "the image title", "url": "assets/images/5.jpg" },
    { "id": 6, "category": "student", "caption": "the image title", "url": "assets/images/i1.jpg" },
    { "id": 7, "category": "venue", "caption": "the image title", "url": "assets/images/i2.jpg" },
    { "id": 8, "category": "venue", "caption": "the image title", "url": "assets/images/i3.jpg" },
    { "id": 9, "category": "venue", "caption": "the image title", "url": "assets/images/i6.jpg" },
    { "id": 10, "category": "event", "caption": "the image title", "url": "assets/images/i1.jpg" },
    { "id": 11, "category": "event", "caption": "the image title", "url": "assets/images/i2.jpg" },
    { "id": 12, "category": "event", "caption": "the image title", "url": "assets/images/i3.jpg" },
    { "id": 13, "category": "student", "caption": "the image title", "url": "assets/images/i6.jpg" },
    { "id": 14, "category": "student", "caption": "the image title", "url": "assets/images/1.jpg" },
    { "id": 15, "category": "student", "caption": "the image title", "url": "assets/images/2.jpg" },
    { "id": 16, "category": "venue", "caption": "the image title", "url": "assets/images/3.jpg" },
    { "id": 17, "category": "venue", "caption": "the image title", "url": "assets/images/4.jpg" },
    { "id": 18, "category": "venue", "caption": "the image title", "url": "assets/images/5.jpg" },
    { "id": 19, "category": "venue", "caption": "the image title", "url": "assets/images/i6.jpg" }
]

