import { Routes } from '@angular/router';
import { ViewAllBooksComponent } from './view-all-books/view-all-books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
  { path: 'books', component: ViewAllBooksComponent },
  { path: 'addBook', component: AddBookComponent },
  { path: 'book/:id', component: ViewBookComponent },
  { path: 'updateBook/:id', component: UpdateBookComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' },
];
