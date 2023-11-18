import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {charactersComponent} from '../characters/character.component';
import {Character} from '../character';
import {CharactersService} from '../characters.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, charactersComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by name" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-characters
        *ngFor="let housingLocation of filteredCharactersList"
        [housingLocation]="housingLocation"
      ></app-characters>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  CharactersList: Character[] = [];
  CharactersService: CharactersService = inject(CharactersService);
  filteredCharactersList: Character[] = [];
  constructor() {
    this.CharactersService.getAllCharacters().then((CharactersList: Character[]) => {
      this.CharactersList = CharactersList;
      this.filteredCharactersList = CharactersList;
    });
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredCharactersList = this.CharactersList;
    }
    this.filteredCharactersList = this.CharactersList.filter((Characters) =>
      Characters?.name.toLowerCase().includes(text.toLowerCase()),
    );
  }
}