import { Component } from '@angular/core';

const todos = [
  { id: 1, content: 'eat', completed: true},
  { id: 2, content: 'sing', completed: false},
  { id: 3, content: 'code', completed: true}
];

interface todosType {
    id: number,
    content: string,
    completed: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public todos: todosType[] = todos;
  public currentId: number = 0;
  public currentContent: string = '';

  addTodos(e) {
    let last = this.todos[this.todos.length-1];
    if (!e.target.value) return;
    this.todos.push({
      id: last? last.id + 1 : 1,
      content: e.target.value,
      completed: false
    });
    e.target.value = '';
    console.log(this.todos[this.todos.length-1].id)
  }

  get toggleAll() {
    return this.todos.every(item => item.completed);
  }

  set toggleAll(val) {
    this.todos.forEach(item => {
      item.completed = val;
    });
  }

  removeTodo(id) {
    this.todos = this.todos.filter(item=>(item.id != id));
  }

  toEditing(item) {
    this.currentId = item.id;
    this.currentContent = item.content;
    console.log(this.currentContent);
  }

  editTodo(e, id) {
    for (let item of this.todos) {
      if (item.id === id) {
        item.content = e.target.value;
        this.currentId = 0;
        break;
      }
    }
  }

  cancelEdit(e, item) {
    if (e.keyCode === 27) {
      this.currentId = 0;
      e.target.value = this.currentContent;
    }
  }

  blurSave(e, item) {
    this.currentId = 0;
    item.content = e.target.value;
  }

  // 处理剩余条数
  get remaining() {
    let count = 0;
    this.todos.forEach(item=>{
      if (item.completed != true) {
        count++;
      }
    });
    return count;
  }

  clearDone() {
    this.todos = this.todos.filter(item=>!item.completed);
  }
}
