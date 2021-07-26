import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// import  data from '../Data/CourseList.json';


@Injectable()
export class CoursesService {
  carte = [];

  constructor() { }

  setCourses(data) {
    let idx:Boolean = true;
    this.carte.forEach(function (value) {
      if(value === data) {
        idx = false;
        alert('data already exists');
      }
  });
    if(idx === true){
      this.carte.push(data);
    }
  }
  getCourses() {
    return this.carte;
  }
  clearCourses(data) {
    this.carte = data;
  }
}
