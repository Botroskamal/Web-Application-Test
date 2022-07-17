import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { BookEntity } from "src/database/book.entity";
import { BookData } from "src/database/book.interface";
import { Repository, SelectQueryBuilder } from "typeorm";

@Injectable()
export class BookDBService {
    constructor(
        @InjectRepository(BookEntity)
        private readonly bookRepository: Repository<BookEntity>
    ) {}

    public saveBook(BoodData: BookData): Observable<BookData> {
        return from(this.bookRepository.save(BoodData));
    }

    public getAllBooks(): Observable<BookData[]> {
        return from(this.bookRepository.find());
    }

    public async getBooksByAuthor(author: string): Promise<SelectQueryBuilder<BookEntity>> {
        const books = this.bookRepository.createQueryBuilder("book")
            .where("book.author = :author", { author })
            .select("book")
        console.log(books);
        return books;
    }

    public async getBooksByPublisher(publisher: string): Promise<SelectQueryBuilder<BookEntity>> {
        const books = this.bookRepository.createQueryBuilder("book")
            .where("book.publisher = :publisher", { publisher });
        return books;
    }

}