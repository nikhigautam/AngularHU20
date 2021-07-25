import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  carte = [];
  constructor() { }

  setabout(data) {
    let idx:Boolean = true;
    this.carte.forEach(function (value) {
      if(value === data) {
        idx = false;
        alert('data already exists')
      }
  });
    if(idx === true){
      this.carte.push(data);
    }
  }
  getabout() {
    return this.carte;
  }
}
