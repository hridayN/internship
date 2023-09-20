import { Component } from '@angular/core';
import { GlobalService } from 'src/services/global.service';
import { HeroService } from 'src/services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour Of Heroes';
  num: number;
  num1: number;
  childMessage: string;
  constructor(private globalService: GlobalService, private heroService: HeroService) {
    this.num = 0;
    this.num1 = 0;
    this.childMessage="";
  }
  ngOnInit() {
    this.num = this.globalService.i;
    this.globalService.i = 2;
    this.num1 = this.heroService.i;
    this.heroService.i = 2;
  }
  recevingDataFromChild(messgae: string){
    this.childMessage=messgae;
  }
}
