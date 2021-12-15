import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { UserDTO } from './dtos/user.dto';
import { UserEntity } from './entities/user.entity';
import { CreateUserInput } from './inputs/createUser.input';
import { UpdateUserInput } from './inputs/updateUser.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([UserEntity])],
      resolvers: [
        {
          DTOClass: UserDTO,
          EntityClass: UserEntity,
          CreateDTOClass: CreateUserInput,
          UpdateDTOClass: UpdateUserInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
})
export class UserModule {}
