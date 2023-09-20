// TOPICS COVERED:-
// 1. FOR-EACH LOOP
// 2. ADDING & SORTING IN AN ARRAY
// 3. DECALRING VARIABLE USING "LET", ("VAR", "CONST" (INSIDE "BASIC" FOLDER))
// 4. USE OF "?" & "!"
// 5. TYPE CONVERSION FROM ANY DATYPE TO NUMBER USING + AS PREFIX
// 6. DATA COMMUNICATION USING SERVICES (START FROM FILE: Hero.services.ts), dependency injection


import { Component } from '@angular/core';
import { Hero } from '../Hero/Hero';
import { HeroService } from 'src/services/hero.service';
import { GlobalService } from 'src/services/global.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[];
  flag = false;
  selectedHero?: Hero;
  selectedName: any; // resolving error by providing any as datatype not string, number
  selectedId: any;
  messageFromHeroChild: string = "";
  num: number;
  num1: number;
  //NEW HERO
  inputNewHero = false;
  inputUpdateHero = false;
  inputDeleteHero = false;
  // heroServiceUnInjected: HeroService;
  constructor(private heroService: HeroService, private globalServices: GlobalService) { // heroService is injected into this component, this process is known as dependancy injection, This injection will give us initialized instance (object) of Heroservice (class from hero.services.ts)
    this.heroes = [];
    this.selectedHero = new Hero();
    console.log("component constructor initialized")
    this.num=0;
    this.num1=0;
  }
  ngOnInit(){
    console.log('Injected a: ', this.heroService.a);
    this.getHeroesList();
    this.num = this.globalServices.i;
    this.num1 = this.heroService.i;
  }
  getHeroesList(){
    this.heroes = this.heroService.getHeroData();
  }
  // onSelect(hero: Hero){
  //   this.selectedHero = hero;
  // }
  heroInfo(temp: number) {
    this.flag = true;
    this.selectedHero = this.heroes.find(h => h.id === temp); // lambda expression, for-each loop, return an object from heroes
    this.selectedName = this.heroes.find(h => h.id === temp)?.name;
    this.selectedId = temp;
  }

  getLastHeroId(): number{
    return this.heroes.sort((a:Hero,b:Hero) => b.id-a.id)[0].id; //b-a --> Desending & a-b --> Asending order, lambda expression is returing a collection of heroes (array), using arr[index] find your last element
  }

  submit(name: string) {
    let hero = new Hero(); // way of declaring a variable (3rd type) 
    hero.name = name;
    hero.id=this.getLastHeroId()+1;
    this.heroes.push(hero);
    this.heroes.sort((a:Hero, b:Hero) => a.id-b.id);
    this.inputNewHero=false;
    // this.heroes=this.heroes.filter(h => h.id!==this.getLastHeroId()) // difference b/t filter & find
  }

  updateSubmit(num: string, name: string){
    // type-conversion to number: using of + as prefix converts any datatype to number
    this.heroes.find(h => h.id === +(num))!.name=name; // use of "!", It is used when we know that a variable that TypeScript thinks could be null or undefined actually isn't.
    this.inputUpdateHero=false;
  }

  deleteHero(num: string){
    this.heroes=this.heroes.filter(h => h.id!==+(num));
    this.inputDeleteHero=false;
  }
}