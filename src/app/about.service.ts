import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  carte;
  constructor() { }

  setabout(data) {

      this.carte = data;
  }
  getabout() {
    return this.carte;
  }
}
