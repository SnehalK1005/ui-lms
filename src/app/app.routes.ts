import { Routes } from '@angular/router';
import { ViewAllBooksComponent } from './view-all-books/view-all-books.component';
import { AddBookComponent } from './add-book/add-book.component';

export const routes: Routes = [
  { path: 'books', component: ViewAllBooksComponent },
  { path: 'addBook', component: AddBookComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' },
];
