import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
@Component({
  selector: 'app-smallcart',
  templateUrl: './smallcart.component.html',
  styleUrls: ['./smallcart.component.scss']
})
export class SmallcartComponent implements OnInit {

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

  constructor(private _share: CoursesService) { }

  ngOnInit(): void {
    this.carry1 = this._share.getCourses();

    this.carry1.forEach( (item, index) => {
        this.sum += this.carry1[index].price
    });
  }
}
