declare var M: any;
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalisationService } from './localisation.service';
import { Todo } from './model/todo';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoService } from './todo.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [CommonModule, FormsModule, TodoItemComponent, ReactiveFormsModule],
  providers: [TodoService, LocalisationService],
  standalone: true,
})
export class TodoListComponent implements OnInit {
  public textInput: string;
  public cities: String[];
  public form: any;

  constructor(
    public todoService: TodoService,
    public localisationService: LocalisationService
  ) {
    this.todoService = todoService;
    this.localisationService = localisationService;
  }

  updateTodo(todo: Todo): void {
    this.todoService.updateTodo(todo);
    M.toast({ html: 'Mise à jour effectuée' });
  }

  addTodo() {
    if (!this.textInput) return;
    this.todoService.createTodo(this.textInput);
    M.toast({ html: "La tâche '" + this.textInput + "' à été ajouté" });
    this.textInput = '';
  }

  searchCity(event: any) {
    console.log(this.form.city);
    if (!this.form.city) {
      this.cities = [];
    } else {
      this.cities = this.localisationService.searchCity(this.form.city);
    }
  }

  autoCompleteCity(event: any) {
    console.log(event);
    this.form.city = event;
  }

  ngOnInit() {
    this.cities = this.localisationService.searchCity('');
    //console.log(this.cities);
    this.form = new FormGroup({
      state: new FormControl('Paris'),
      label: new FormControl(),
      city: new FormControl(),
    });
  }
}
