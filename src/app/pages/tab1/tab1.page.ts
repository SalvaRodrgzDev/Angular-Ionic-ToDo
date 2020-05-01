import { Component } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public todosService: TodosService) {

  }

}
