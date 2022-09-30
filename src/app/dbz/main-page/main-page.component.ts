import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: 'Melissa',
    poder: 23324323,
  };

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 1000000,
    },
    {
      nombre: 'Vegeta',
      poder: 20112,
    },
  ];

  agregarNuevoPersonaje(argumento: Personaje): void {
    this.personajes.push(argumento);
  }

  constructor(private dbzService: DbzService) {}
}
