import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  //aquí le digo que el valor personajes va a recibir el valor asociado a data
  //@Input('data') personajes: any[] = [];
  get personajes() {
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) {}
}
