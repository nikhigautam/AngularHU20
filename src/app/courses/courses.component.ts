import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { CoursesService } from '../courses.service';
import  data from '../../Data/CourseList.json';
import { WishlistService } from '../wishlist.service';
import { NgModel } from '@angular/forms';
import { AboutService } from '../about.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  map = new Map();
  searchText;
  flag:boolean = true;
  public searchFilter: any = '';
  p: number = 1;
  courses = data;
  carry = [];
  wish = [];
  carte;
  onclick(event) {
    // this.carte=event;
    // console.log(event);
    // this.carry.push(event);
    // console.log(this.carry);
    this._courses.setCourses(event)
  }
  onWish(event) {
    this._wishlist.setWishlist(event);
    this.map.set(event.id, true);

  }
  onDel(event) {
    this._wishlist.onDel(event);
    this.map.delete(event.id);
  }

  onabout(event) {
    this._about.setabout(event);
  }
  exists = roleParam => this.wish.some( ({id}) => id == roleParam)
  constructor(private _courses: CoursesService, private _wishlist : WishlistService, private _about : AboutService) { }

  ngOnInit()  {
    this.wish = this._wishlist.getWishlist();
  }
  isAscendic = true;
  ascendic(){

     this.courses = this.courses.sort((n1,n2) => {
    if (n1.price < n2.price) {
        return 1;
    }
    if (n1.price > n2.price) {
        return -1;
    }
    return 0;
});
  }
  descendic(){

     this.courses = this.courses.sort((n1,n2) => {
    if (n1.price > n2.price) {
        return 1;
    }
    if (n1.price < n2.price) {
        return -1;
    }
    return 0;
});
  }
}
