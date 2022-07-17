import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookDBController } from "./book.controller";
import { BookDBService } from "./book.service";
import { BookEntity } from "../database/book.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([BookEntity])
    ],
    controllers: [BookDBController],
    providers: [BookDBService]
})

export class BookDBModule {}