import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutService } from '../about.service';
import { CoursesService } from '../courses.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  flag:boolean = true;
  public href: string = "";
  public paths: string = "";
  carry1;
  currentTime;
  expireTime;
  minutes;
  constructor(private router: Router, private _about: AboutService, private _cart: CoursesService, private _wish: WishlistService) {}
  addtocart(data){
    this._cart.setCourses(data);
  }
  addtowish(data){
    this._wish.setWishlist(data);
  }
  ngOnInit() {
    this.carry1 = this._about.getabout();
      this.href = this.router.url;
      console.log(this.href);
      if(this.href.slice(1,2) === 'c') {
        this.paths = "All Courses";
      }
      else {
        this.paths = "My wishlist";
        this.flag = false;
      }
  this.currentTime = new Date();
  this.expireTime = new Date(this.carry1.discountValidTill);
  this.minutes = Math.abs(this.expireTime- this.currentTime);
  this.minutes = this.minutes/100/600/6000;
  }
}
