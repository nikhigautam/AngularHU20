import { Component, OnInit } from '@angular/core';
import  data from '../../Data/UserDetail.json';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { observable } from 'rxjs';
import { IEmployee } from './userdetails';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  ispro = 'Student';
  flag:boolean = false;
  choice:boolean = false;
  profileForm: FormGroup;
  onclick() {
      this.flag = true;
  }
  onchoose() {
    this.flag = !this.flag;
    this.choice = !this.choice;
  }
  constructor() {
  }

  ngOnInit(): void {
      this.profileForm = new FormGroup({
        'Displayname': new  FormControl(data[0].displayName, Validators.required),
        'Firstname': new FormControl(data[0].firstName, Validators.required),
        'Lastname': new FormControl(data[0].lastName),
        'AboutYourself': new FormControl(data[0].aboutYourself,  Validators.maxLength(200)),
        'role': new FormControl(data[0].roleText,  Validators.maxLength(200)),
      });

      // if(data[0].isProfessional == true) {
      //   this.ispro = 'Professional';
      // }
      // else {
      //   this.ispro = 'Student';
      // }
  }
  onSubmit(data) {
    console.log(this.profileForm);
  }
}
