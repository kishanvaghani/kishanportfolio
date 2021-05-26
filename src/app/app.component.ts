import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kishanPortfolio';
  scrolldown = true;
  toogle = false;
  collapsing=false;

  toogleBtn() {
    this.toogle = !this.toogle;
  }

  img=[
    {
      id:1,
      src:"../assets/uploads/gallery_img-01.jpg"
    },
    {
      id:2,
      src:"../assets/uploads/gallery_img-02.jpg"
    },
    {
      id:3,
      src:"../assets/uploads/gallery_img-03.jpg"
    },
    {
      id:4,
      src:"../assets/uploads/gallery_img-04.jpg"
    },
    {
      id:5,
      src:"../assets/uploads/gallery_img-05.jpg"
    },
    {
      id:6,
      src:"../assets/uploads/gallery_img-06.jpg"
    }
  ]
}
