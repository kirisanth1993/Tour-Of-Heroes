import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
    
}

const heroes: Hero[] = [
    { id: 2, name: 'Kirisanth' },
    { id: 3, name: 'Gowmaran' },
    { id: 4, name: 'Gunesh' },
    { id: 5, name: 'Brundha' },
    { id: 6, name: 'Kajan' },
    { id: 7, name: 'Vaiz' },
    { id: 8, name: 'Sapthami' },
    { id: 9, name: 'Niwash' },
    { id: 10, name: 'Nio' }
];


@Component({
  selector: 'my-app',
  template: `
        <h1>{{title}}</h1>
        <h2>My Heroes</h2>
        <ul class="Heroes">
          <li *ngFor="let hero of Heroes">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
          </li>
        </ul>
        <h2>{{hero.name}} details</h2>
        <div>
          <label>id: </label>{{hero.id}}
        </div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="hero.name" placeholder="name">
        </div>
       
        `
})
export class AppComponent  {
    title = 'Tour of Heroes';
    hero = 'Spiderman';
    name = 'Kirisanth';

     
    hero: Hero = {
        id: 1,
        name: 'Windstrom'
    };

    Heroes = heroes; 
       
    

}


