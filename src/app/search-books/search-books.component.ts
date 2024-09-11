import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Book } from '../book';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-search-books',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-books.component.html',
  styleUrl: './search-books.component.css',
})
export class SearchBooksComponent {
  filterField: string = 'title';
  filterValue: string = '';
  filteredBooks: Book[] = [];

  constructor(private http: HttpClient, private bookService: BookService) {}
  ngOnInit(): void {
    this.getBooks();
  }
  private getBooks() {
    this.bookService.getBooksList().subscribe((data) => {
      this.filteredBooks = data;
    });
  }
  onSearch() {
    const params = {
      field: this.filterField,
      value: this.filterValue,
    };
    this.bookService.getSearchedList(params).subscribe((data) => {
      this.filteredBooks = data;
    });
  }
  clearSearch() {
    this.filterField = 'title';
    this.filterValue = '';
    this.getBooks();
  }
}
