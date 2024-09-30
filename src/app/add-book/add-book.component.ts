import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Book } from '../book';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar


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
    private snackBar: MatSnackBar // Inject MatSnackBar
  ) {}
  ngOnInit(): void {}

  saveEmployee() {
    this.bookService.addBook(this.book).subscribe(
      (data) => {
        this.openSnackBar('Book added successfully !!', 'Close'); // Success Snackbar
        this.goToBookList();
      },
      (error) => {
        this.openSnackBar('Error adding book !!', 'Close'); // Error Snackbar
      }
    );
  }

  goToBookList() {
    this.router.navigate(['/books']);
  }

  onSubmit(): void {
    this.saveEmployee();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
