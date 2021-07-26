import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  carte = [];
  constructor() { }

  setWishlist(data) {
    let idx:Boolean = true;
    this.carte.forEach(function (value) {
      if(value === data) {
        idx = false;
      }
  });
    if(idx === true){
      this.carte.push(data);
    }
  }
  getWishlist() {
    return this.carte;
  }
  onDel(event) {
    this.carte.forEach( (item, index) => {
      if(item === event) this.carte.splice(index,1);
    });
  }
}
