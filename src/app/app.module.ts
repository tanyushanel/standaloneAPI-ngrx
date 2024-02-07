import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/counter.reducer';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forRoot({ count: counterReducer })],
})
export class AppModule {}
