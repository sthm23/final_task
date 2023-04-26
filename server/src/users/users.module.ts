import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './services/user.service';
import { DbModule } from 'src/db/db.module';

@Module({
    imports: [DbModule],
    providers: [UserService],
    controllers: [UserController],
    exports: [UserService]
})
export class UsersModule {}