import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
    constructor(private userService: UsersService) { }

    // @Get()
    // getUsers(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean,) {
    //     console.log("🚀 ~ file: users.controller.ts ~ line 8 ~ UsersController ~ getUsers ~ sortBy", sortDesc)
    //     return [{ username: 'KAshish', email: 'kashish@gmail.com' }, { username: 'Ashish', email: 'ashish@gmail.com' }];
    // }
    @Get()
    getUsers() {
        return this.userService.fetchUsers()
    }

    @Get('posts')
    getUsersPosts() {
    }
    // @Post()
    // createUser(@Req() request: Request, @Res() response: Response) {
    //     console.log(request.body)
    //     response.send("Created")
    // }
    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
        console.log(userData)
        return this.userService.createUser(userData)

    }
    // @Get(':id/:postId')
    // getUserByID(@Param('id') id: string, @Param('postId') postId: string) {
    //     console.log(id, postId)
    //     return { id, postId }
    // }
    @Get(':id')
    getUserByID(@Param('id', ParseIntPipe) id: number) {
        const user = this.userService.getUserById(id)
        if (!user) {
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST)
        } else {
            return user
        }
    }
}
