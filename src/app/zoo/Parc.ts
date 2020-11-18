import { Animal } from './Animal';

export class Parc {
  animals: Array<Animal> = [];

  add(anAnimal: Animal){
      this.animals.push(anAnimal);
  }
}