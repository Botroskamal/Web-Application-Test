import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Observable } from "rxjs";
import { BookEntity } from "src/database";
import { BookData } from "src/database/book.interface";
import { SelectQueryBuilder } from "typeorm";
import { BookDBService } from "./book.service";

@Controller("books")
export class BookDBController {
    constructor(private BookSrevices: BookDBService) {}

    @Post("addBook")
    addBook(@Body() book: BookData){
        return this.BookSrevices.saveBook(book);
    }

    @Get("allBooks")
    getBooks(): Observable<BookData[]> {
        return this.BookSrevices.getAllBooks();
    }

    @Get("author/:author")
    getAuthorBooks(@Param("author") author: string): Promise<SelectQueryBuilder<BookEntity>> {
        return this.BookSrevices.getBooksByAuthor(author);
    }

    @Get(":publisher")
    getPublisherBooks(@Param("publisher") publisher: string): Promise<SelectQueryBuilder<BookEntity>> {
        return this.BookSrevices.getBooksByPublisher(publisher);
    }
    
}