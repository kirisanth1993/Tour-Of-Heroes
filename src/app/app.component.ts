import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
    
}

@Component({
  selector: 'my-app',
  template: `
        <h1>{{title}}</h1>
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

    const heroes: Hero[
    { id: 02, name: "Kirisanth" },
    { id: 03, name: "Gowmaran" },
    { id: 04, name: "Gunesh" },
    { id: 05, name: "Brundha" },
    { id: 06, name: "Kajan" },
    { id: 07, name: "Vaiz" },
    { id: 08, name: "Sapthami" },
    { id: 09, name: "Niwash" },
    { id: 10, name: "Nio" },
    ];

    Heroes = heroes;

}


