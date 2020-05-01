import { Component } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public todosService: TodosService,
                private router: Router) {

  }

  agregarLista() {
    this.router.navigateByUrl('/tabs/tab1/agregar');
  }
}
