import {Component, Input} from '@angular/core';
import {NgIf, UpperCasePipe} from "@angular/common";
import {Hero} from "../Hero";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    NgIf,
    UpperCasePipe,
    FormsModule
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
 @Input()  hero?: Hero;
}
