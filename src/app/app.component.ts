import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ViewAllBooksComponent } from './view-all-books/view-all-books.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ViewAllBooksComponent,
    MatSnackBarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Library Management System';
}
