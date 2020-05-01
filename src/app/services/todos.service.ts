import { Injectable } from '@angular/core';
import { Lista } from "../models/lista.model";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  listas: Lista[] = [];

  constructor() {

    const lista1 = new Lista('Aprender Angular');
    const lista2 = new Lista('Aprender Ionic con Angular');

    this.listas.push(lista1, lista2);
  }
}
