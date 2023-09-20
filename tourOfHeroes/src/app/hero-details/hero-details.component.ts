import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroService } from 'src/services/hero.service';
import { Hero } from '../Hero/Hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent {
  @Output() messageFromHeroDetails: EventEmitter<string> = new EventEmitter<string>();
  @Input() heroId: number;
  selectedHero: Hero;
  constructor(private heroService: HeroService) {
    this.heroId = 0;
    this.selectedHero = new Hero();
  }
  ngOnChanges() { // this is the very fisrt life cycle hook of a component, it triggers very firstly when the compoennt is initialised & every time any changes is made to the component
    if (this.heroId !== null && this.heroId !== undefined && this.heroId > 0) {
      this.selectedHero = this.heroService.getHeroDetailsById(this.heroId);
      this.messageFromHeroDetails.emit(this.selectedHero.name + "has sucessfully selected from list of heroes");
    }
  }
  ngOnInit() { // This life cycle hook is trigeerd only have the component is loaded for the very first time

  }
}
