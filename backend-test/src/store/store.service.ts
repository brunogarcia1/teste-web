import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreEntity } from 'src/db/entities/store.entity';
import { Repository } from 'typeorm';
import { StoreDTO } from './dto/store.dto';

@Injectable()
export class StoreService {

    constructor(
        @InjectRepository(StoreEntity)
        private readonly storeRepository: Repository<StoreEntity>
    ) { }

    async findAll(page: number = 1, pageSize: number = 10):
        Promise<{ data: StoreDTO[], total: number }> {
        const skip = (page - 1) * pageSize;

        const [data, total] = await this.storeRepository.findAndCount({
            order: { descricao: 'ASC' },
            skip,
            take: pageSize
        })
        return { data, total }
    }

    async create(storeDto: StoreDTO): Promise<StoreEntity> {
        const newStore = this.storeRepository.create(storeDto);
        await this.storeRepository.save(newStore);
        return newStore;
    }

    async findById(id: number): Promise<StoreDTO> | null {
        const storeFound = await this.storeRepository.findOne({
            where: { id }
        })

        if (!storeFound) {
            return null
        }

        return {
            id: storeFound.id,
            descricao: storeFound.descricao
        }
    }
}
