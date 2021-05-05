import { Component, OnInit } from '@angular/core';
import {Hero} from '../model/hero';
import {HEROES} from '../model/mock-heroes';
import {HeroService} from '../service/hero.service';
import {MessageService} from '../service/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // heroes = HEROES;

  heroes: Hero[];
  // selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`Heroes component: Selected hero id=${hero.id}`);
  // }

  getHeroes(): void{
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
