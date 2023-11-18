import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Character} from '../character';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
     <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.image"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">Specie:{{ housingLocation.species }}</p>
      <p class="listing-location">Status: {{ housingLocation.status }}</p> 
      <a [routerLink]="['/details', housingLocation.id]">More details</a>
    </section>
  `,
  styleUrls: ['./characters.component.css'],
})
export class charactersComponent {
  @Input() housingLocation! : Character;
}
