import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  i: number;
  count: number = 0;
  constructor() {
    this.i = 1;
    this.count=this.count+1;
    console.log("count", this.count);
  }

}
