import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Book } from '../book';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  imports: [FormsModule],
  standalone: true,
})
export class AddBookComponent {
  book: Book = new Book();
  constructor(
    private bookService: BookService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {}

  saveEmployee() {
    this.bookService.addBook(this.book).subscribe(
      (data) => {
        console.log('New Book Added', data); // Log the response
        this.snackBar.open('Book added successfully!', 'Close', {
          duration: 3000,
        });
      },
      (error) => {
        console.error('Error adding book:', error); // Log the error
        this.snackBar.open('Error adding book. Please try again.', 'Close', {
          duration: 3000,
        });
      }
    );
  }

  goToBookList() {
    this.router.navigate(['/books']);
  }

  onSubmit(): void {
    console.log('New Book Added', this.book);
    this.saveEmployee();
    this.goToBookList();
  }
}
