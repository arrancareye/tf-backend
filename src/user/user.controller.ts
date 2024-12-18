import { Controller, Get, Post, Body, Param, Patch, Delete, Req, Ip } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller({ path: 'users' })
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body() userData: User) {
        return this.userService.create(userData);
    }

    @Get()
    fidAll(@Req() request: Request, @Ip() ip: string, @Param() params: any) {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.userService.findOne(+id)
    }

    @Patch(':id') 
    update(@Param('id') id: number, @Body() userData: User) {
        return this.userService.update(+id, userData);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.userService.remove(+id);
    }
}
