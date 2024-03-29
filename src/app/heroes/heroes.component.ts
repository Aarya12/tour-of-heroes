import {Component} from '@angular/core';
import {Hero} from "../Hero";
import {LowerCasePipe, NgFor, NgIf, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HEROES} from "../mock-heroes";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    UpperCasePipe,
    FormsModule,
    NgFor,
    NgIf,
    LowerCasePipe,
    TitleCasePipe,
    HeroDetailComponent
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;


  onselect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
