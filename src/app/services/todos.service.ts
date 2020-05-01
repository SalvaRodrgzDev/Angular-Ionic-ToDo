import { Injectable } from '@angular/core';
import { Lista } from "../models/lista.model";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  listas: Lista[] = [];

  constructor() {

    const lista1 = new Lista('Recolectar las piedras del infinito');
    const lista2 = new Lista('Héroes a desaparecer');

    this.listas.push(lista1, lista2);
  }
}
