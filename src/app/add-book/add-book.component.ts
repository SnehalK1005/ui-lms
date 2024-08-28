import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Book } from '../book';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  imports: [FormsModule],
  standalone: true,
})
export class AddBookComponent {
  book: Book = new Book();
  constructor(private bookService: BookService, private router: Router) {}
  ngOnInit(): void{}

  saveEmployee(){
    this.bookService.addBook(this.book).subscribe(data => {
      console.log("New Book Added", data);
    }, error => console.log(error))
  }

  goToBookList(){
    this.router.navigate(['/books'])
  }

  onSubmit(): void {
    console.log("New Book Added", this.book);
    this.saveEmployee();
    this.goToBookList();
  }
}
