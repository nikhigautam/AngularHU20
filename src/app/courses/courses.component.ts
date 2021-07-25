import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { CoursesService } from '../courses.service';
import  data from '../../Data/CourseList.json';
import { WishlistService } from '../wishlist.service';
import { NgModel } from '@angular/forms';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public searchFilter: any = '';
  p: number = 1;
  courses = data;
  carry = [];
  carte;
  onclick(event) {
    // this.carte=event;
    // console.log(event);
    // this.carry.push(event);
    // console.log(this.carry);
    this._courses.setCourses(event)
  }
  onWish(event) {
    this._wishlist.setWishlist(event)
  }
  onabout(event) {
    this._about.setabout(event);
  }
  constructor(private _courses: CoursesService, private _wishlist : WishlistService, private _about : AboutService) { }

  ngOnInit()  {
    // this._courses.setCourses(this.carteevent)
  }

}
