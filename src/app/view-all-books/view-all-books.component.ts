import { Component } from '@angular/core';
import { Book } from '../book';
import { CommonModule } from '@angular/common';
import { BookService } from '../book.service';
@Component({
  selector: 'app-view-all-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-all-books.component.html',
  styleUrl: './view-all-books.component.css',
})
export class ViewAllBooksComponent {
  books: Book[] = [];
  constructor(private bookService: BookService){ }
  ngOnInit(): void{
    this.getBooks();
  }
  private getBooks(){
    this.bookService.getBooksList().subscribe(data => {
      this.books = data;
    })
  }
}
