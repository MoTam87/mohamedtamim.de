import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent   {
  images = ['flower-8077948_1920.jpg', 'lotus-8065281_1920.jpg', 'wild-bee-8058943_1920.jpg'];
  headlines = ['bring photography to the next level', 'Clicking the images with perfection', 'Explore. Create. Inspire.'];
  currentImage = 0;
  showImage = false;

  ngOnInit() {
    this.updateImage ();
  }


  updateImage(){

    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;


      setTimeout(() => {
        this.showImage = true
      }, 10);


    }, 5000)
  }
}
