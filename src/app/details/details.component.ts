import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {CharactersService} from '../characters.service';
import {Character} from '../character';
import { ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      
      <section class="listing-description">
      <img
        class="listing-photo"
        [src]="housingLocation?.image"
        alt="Exterior photo of {{ housingLocation?.name }}"
        crossorigin
      />
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">Status: {{ housingLocation?.status }}</p>
        <p class="listing-location">Species: {{housingLocation?.species}}</p>
        <p class="listing-location">Gender: {{housingLocation?.gender}}</p>
        <p class="listing-location">Location: {{housingLocation?.location?.name}}</p>
      </section>

      
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(CharactersService);
  housingLocation: Character | undefined;
  
  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getCharactersById(housingLocationId).then((housingLocation) => {
      this.housingLocation = housingLocation;
    });
  }

  }
