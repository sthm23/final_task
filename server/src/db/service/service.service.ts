import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/createuser.dto';
import { UserEntity } from 'src/users/entities/user.entity';

@Injectable()
export class DBService {
    private readonly DBUsers:UserEntity[] = [
        {
          id: '3e8a9e0c-db7c-4c6b-b7db-5bc0075eb3e0',
          lastName: 'John',
          firstName: 'Carter',
          birthday: '',
          gender: 'male',
          login: 'test2',
          password: '$2b$10$KDfn6FO1VW92opLPgf81F.HD65.TnO56XPwVZzb70MZfIgPd5t24G',
          createDate: Date.now().toString(),
          email: 'sss@sss.ru',
          phoneNumber: '995558855',
          country: 'uzbekistan',
          citizenship: 'uzbek'
        },
        {
          id: 'b056119c-53c2-4a78-b9c7-8d5fa4d73308',
          lastName: 'Maria',
          firstName: 'Smith',
          birthday: '',
          gender: 'female',
          login: 'test',
          password: '$2b$10$Nf53ojFq59rei58FgBGjJ.GYtB5/JlhGGKtnYQuRz647fsbZAjgcS',
          createDate: Date.now().toString(),
          email: 'sss@sss.ru',
          phoneNumber: '995558855',
          country: 'uzbekistan',
          citizenship: 'russian'
        },
      ];

    constructor() {}

    find() {
        return this.DBUsers
    }

    findOneBy(id: string) {
        return this.DBUsers.find(user=> user.id === id);
    }

    findOne(login: string) {
        return this.DBUsers.find(user=> user.login === login);
    }

    create(dto: CreateUserDto):UserEntity {
        const newUser = new CreateUserDto(dto)
        return newUser
    }

    save(user: UserEntity) {
        this.DBUsers.push(user);
        return user
    }

    update(id: string, user: UserEntity) {
        const userIndex = this.DBUsers.findIndex(el=>el.id === id);
        if(userIndex !== -1) {
            this.DBUsers.splice(userIndex, 1, user);
            return user
        }
        return null
    }

    delete(id: string) {
        const userIndex = this.DBUsers.findIndex(el=> el.id === id);
        if(userIndex !== -1) {
            this.DBUsers.splice(userIndex, 1);
            return true
        }
        return null
    }

}
