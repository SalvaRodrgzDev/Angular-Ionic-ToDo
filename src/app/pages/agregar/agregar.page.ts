import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from 'src/app/models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage {

  lista: Lista;
  nombreItem = '';

  constructor(private todoService: TodosService,
              private router: ActivatedRoute) { 

    const listaId = this.router.snapshot.paramMap.get( 'listaId' )

    this.lista = this.todoService.obtenerLista( listaId );
  }

  agregarItem() {

    if ( this.nombreItem.length === 0 ) {
      return;
    }

    const nuevoItem = new ListaItem( this.nombreItem );
    this.lista.items.push(nuevoItem);

    this.nombreItem = '';
    this.todoService.guardarStorage();
  }
}
