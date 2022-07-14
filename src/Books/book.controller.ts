import { Controller, Get, Param } from "@nestjs/common";
import { BookService } from "./book.service";

@Controller("books")
export class BookController {
    constructor(private readonly BookSrevices: BookService) {}

    @Get("allBooks")
    getBooks(){
        return this.BookSrevices.getAllBooks();
    }

    @Get(":author")
    getAuthorBooks(@Param("author") author: string){
        return this.BookSrevices.getBooksByAuthor(author);
    }

    @Get(":publisher")
    getPublisherBooks(@Param("publisher") publisher: string){
        return this.BookSrevices.getBooksByPublisher(publisher);
    }
}