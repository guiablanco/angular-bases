import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  nameChange( name: string): void {
    this.name = name
  }

  ageChange( age: number): void {
    this.age = age
  }

  resetHeroProfile(): void {
    this.name = 'ironman';
    this.age = 45;
  }

  get capitalizedName(): string {
    return this.name.toUpperCase()
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`
  }
}
