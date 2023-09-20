import { Injectable } from '@angular/core';
import { Hero } from 'src/app/Hero/Hero';
import { HEROES } from 'src/app/mock-heroes/mock-heroes';

// <----------------------SERVICES-------------------->

// service deals in data tranfering & fetching of data between component & dataserver/ any kind of data
// Using dependency injection, A process through which we can create an instance (object) of class without initilising a object using 'new' keyword in any outside class
// eg: - In heroes.component.ts file, heroService is injected inside a constructor.

@Injectable() // this indicates that this service class can be injected in a component/ directive & its properties (prperties of class) can be accesed through injected variable 
export class HeroService {
  a: string;
  i: number;
  private heroes: Hero[]; // privte so can't be accesse dfrom outside the class
  constructor() {
    this.a = "Hello";
    console.log("service constructor initialized")
    this.heroes = HEROES;
    this.i = 1;
  }
  getHeroData(){
    return this.heroes;
  }
  getHeroDetailsById(heroId: number): Hero{
    return this.heroes.find(h => h.id === heroId)!;
  }
}
