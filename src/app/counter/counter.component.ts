import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, startWith } from 'rxjs';
import { decrement, increment, reset } from '../actions/counter.actions';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
