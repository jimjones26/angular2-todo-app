import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  styles: [`
    .complete { text-decoration: line-through; }
  `],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() item;
  @Output() onChange = new EventEmitter();
  @Output() onRemove = new EventEmitter();
}
