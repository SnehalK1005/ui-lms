import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { ViewAllBooksComponent } from './view-all-books/view-all-books.component';
import { AddBookComponent } from './add-book/add-book.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ContentComponent, ViewAllBooksComponent, AddBookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Library Management System';
}
