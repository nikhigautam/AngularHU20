import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  sum = 0;
  idx:any = 0;
  courses1:any;
  carry1 = [];
  carry2 = [];
  onclick1() {
    console.log(this.carry1[1].courseCreator);
    console.log(this.sum)
  }
  ondel(event) {
    this.carry1.forEach( (item, index) => {
      if(item === event) this.carry1.splice(index,1);
    });
    this.sum = 0;
    this.carry1.forEach( (item, index) => {
      this.sum += this.carry1[index].price
  });
  }
  onwish(event) {
    this._wishlist.setWishlist(event)
  }
  oncheckout() {
    alert('order sucessfully placed');
    this.carry1 = [];
    this.sum = 0;
  }
  constructor(private _share: CoursesService, private _wishlist : WishlistService) { }

  ngOnInit(): void {
    this.carry1 = this._share.getCourses();

    this.carry1.forEach( (item, index) => {
        this.sum += this.carry1[index].price
    });
  }

}
