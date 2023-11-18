import { Injectable } from '@angular/core';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';
  url = 'https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10]';

  async getAllCharacters(): Promise<Character[]>{
    const data = await fetch(this.url);
    return (await data.json() ?? [])
  }
  
  async getCharactersById(id: number): Promise<Character | undefined> {
    const data = await fetch(`https://rickandmortyapi.com/api/character//${id}`);
    return (await data.json()) ?? {};
  }

  async getCharacterByName(name: string): Promise<Character[]>{
    const data = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
    return (await data.json() ?? [])
  }
 
  }
  

