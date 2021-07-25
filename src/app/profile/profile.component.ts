import { Component, OnInit } from '@angular/core';
import  data from '../../Data/UserDetail.json';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { observable } from 'rxjs';
import { IEmployee } from './userdetails';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  onClick() {
    console.log();
  }
  constructor() {
  }

  ngOnInit(): void {
      this.profileForm = new FormGroup({
        'Displayname': new  FormControl(data[0].displayName),
        'Firstname': new FormControl(data[0].firstName),
        'Lastname': new FormControl(data[0].lastName),
        'AboutYourself': new FormControl(data[0].aboutYourself),
      });
  }

}
