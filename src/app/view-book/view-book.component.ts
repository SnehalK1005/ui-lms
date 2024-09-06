import { Component } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-book.component.html',
  styleUrl: './view-book.component.css',
})
export class ViewBookComponent {
  book: Book = new Book();
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}
  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.bookService.getBookById(+bookId).subscribe((book) => {
        this.book = book;
      });
    }
  }
  backToViewBook() {
    this.router.navigate(['books']);
  }
}
