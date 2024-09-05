import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css',
})
export class UpdateBookComponent {
  id: number | undefined;
  book: Book = new Book();

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBookById(this.id).subscribe(
      (data) => {
        this.book = data;
      },
      (error) => {
        console.error('Error fetching the book', error);
      }
    );
  }
  onSubmit(): void {}
}
