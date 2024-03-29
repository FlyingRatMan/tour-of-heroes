import { Component } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes: Hero[] = [];
  
  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {return;}
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => this.heroes.push(hero))
  }

  delete(hero: Hero): void {
    if(!hero){return;}
    this.heroes = this.heroes.filter(hero => hero !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
