import { Injectable } from '@nestjs/common';
import { CreateUserTypes } from '../../../utils/types'

@Injectable()
export class UsersService {
    private fakeUsers = [
        { id: 1, username: "admin", email: "admin@example.com" },
        { id: 2, username: "new", email: "new@example.com" },
        { id: 3, username: "john", email: "john@example.com" }
    ]

    fetchUsers() {
        return this.fakeUsers
    }

    createUser(userDetails: CreateUserTypes) {
        this.fakeUsers.push(userDetails)
        return;
    }

    getUserById(id: number) {
        return { id, username: 'Arun', email: 'arun@gmail.com' }
    }

}
