import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}
    
    async create(user: Partial<User>): Promise<User> {
        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser);
    }      
    
    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }
    
    async findOne(id: number): Promise<User> {
        return this.userRepository.findOneBy({ id });
    }

    async findByEmail(email: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { email } });
    }

    async findById(id: number): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { id } });
    }
    
    async update(id: number, userData: User): Promise<User> {
        await this.userRepository.update(id, userData);
        return this.findOne(id);
    }
    
    async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}
