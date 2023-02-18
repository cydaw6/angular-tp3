import { Injectable } from '@angular/core';
import { Todo } from './model/todo';

@Injectable()
export class TodoService {
  public todos: Todo[] = [];

  constructor() {
    this.createTodo('Tp Haskell');
    this.createTodo('Tp2 Angular');
    this.todos[1].done = true;
    this.createTodo('ipynb graphes');
    this.createTodo('Projet compilation');
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  createTodo(label: string): void {
    if (!label) return;
    this.todos.push({
      id: Math.floor(Math.random() * 1000),
      creationDate: new Date().valueOf(),
      label: label,
      done: false,
    });
  }

  updateTodo(todo: Todo): void {
    let i = this.todos.findIndex((t) => t.id == todo.id);
    if (i == -1) {
      console.warn('Todo of id : ' + todo.id + " couldn't be found");
      return;
    }
    this.todos[i] = todo;
  }
}
