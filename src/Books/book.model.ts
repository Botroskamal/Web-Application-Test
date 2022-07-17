export class Book {
    private Name: string;
    private ISNB: Number;
    private Author: string;
    private year: Number;
    private publisher: string;
    private category: string;

    constructor(Name: string, ISBN: Number, Author: string, year: Number, publicher: string, category: string) {
        this.Name = Name;
        this.ISNB = ISBN;
        this.Author = Author;
        this.year = year;
        this.publisher = publicher;
        this.category = category;
    }

    public getName(): string {
        return this.Name;
    }

    public getISNB(): Number { return this.ISNB; }
    public getAuthor(): string { return this.Author; }
    public getYear(): Number { return this.year; }
    public getPublisher(): string { return this.publisher; }
    public getCategory(): string { return this.category; }
}