import { Injectable, NotFoundException } from "@nestjs/common";
import { Book } from "./book.model";

@Injectable()
export class BookService {
    private readonly books: Book[] = [];

    public getAllBooks(): Book[] {
        return [...this.books]
    }

    public getBooksByAuthor(author: string): Book[] {
        return this.findBooksByAuthor(author);
    }

    public getBooksByPublisher(publisher: string): Book[] {
        return this.findByPublisher(publisher);
    }

    private findBooksByAuthor(author: string): Book[] {
        const BooksByAuthor = this.books.filter(book => book.getAuthor() === author);
        if(!BooksByAuthor) {
            throw new NotFoundException('Could not find product.');
        }
        else{
            return [...BooksByAuthor];
        }
    }

    private findByPublisher(publisher: string): Book[] {
        const BooksByPublisher = this.books.filter(book => book.getPublisher() === publisher);
        if(!BooksByPublisher) {
            throw new NotFoundException('Could not find product.');
        }
        else{
            return [...BooksByPublisher];
        }
    }
}