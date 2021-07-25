import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { CoursesService } from '../courses.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  p: number = 1;
  wish = [];
  onclick1(event) {
    console.log(event);
    this._c1.setCourses(event)
  }
  constructor(private _share: WishlistService, private _c1: CoursesService) { }

  ngOnInit(): void {
    this.wish = this._share.getWishlist();
  }

}
