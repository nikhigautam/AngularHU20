import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { CoursesService } from '../courses.service';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  map = new Map();
  p: number = 1;
  wish = [];
  onclick1(event) {
    console.log(event);
    this._c1.setCourses(event)
  }
  ondel(event) {
    this.wish.forEach( (item, index) => {
      if(item === event) this.wish.splice(index,1);
    });
  }
  onabout(event) {
    this._about.setabout(event);
  }
  constructor(private _share: WishlistService, private _c1: CoursesService, private _about : AboutService) { }

  ngOnInit(): void {
    this.wish = this._share.getWishlist();
  }

}
