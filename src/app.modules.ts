import { Module } from "@nestjs/common";
import { UsersModule } from "./users/user.module.js";
import { TodosModule } from "./todos/todos.module.js";

@Module ({
    imports:[UsersModule, TodosModule],
    controllers:[],
    providers:[],
})

export class AppModule {}