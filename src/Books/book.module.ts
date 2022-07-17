import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookController } from "./book.controller";
import { BookService } from "./book.service";
import { Book } from "../Books/book.model";

@Module({
    imports: [
        TypeOrmModule.forFeature([Book])
    ],
    controllers: [BookController],
    providers: [BookService]
})

export class BookModule {}