import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public href: string = "";
  public paths: string = "";
  carry1;
  constructor(private router: Router, private _about: AboutService) {}

  ngOnInit() {
    this.carry1 = this._about.getabout();
      this.href = this.router.url;
      console.log(this.href);
      if(this.href.slice(1,2) === 'c') {
        this.paths = "All Courses";
      }
      else {
        this.paths = "My wishlist";
      }

  }
}
