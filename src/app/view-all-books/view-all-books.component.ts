import { Component } from '@angular/core';
import { Book } from '../book';
import { CommonModule } from '@angular/common';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-all-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-all-books.component.html',
  styleUrl: './view-all-books.component.css',
})
export class ViewAllBooksComponent {
  books: Book[] = [];
  constructor(private bookService: BookService, private router: Router) {}
  ngOnInit(): void {
    this.getBooks();
  }
  private getBooks() {
    this.bookService.getBooksList().subscribe((data) => {
      this.books = data;
    });
  }
  updateBook(id: number | undefined) {
    this.router.navigate(['updateBook', id]);
  }
  viewBook(id: number | undefined) {
    this.router.navigate(['book', id]);
  }
  deleteBook(id: number | undefined) {
    this.bookService.deleteBook(id).subscribe(
      (data) => {
        console.log('Message : ' + data);
        this.getBooks();
      },
      (error) => {
        console.error('Error updating the book', error);
      }
    );
  }
}
