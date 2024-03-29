import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Links, LinksSchema, UserSchema, Users } from './schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mykola_2024:tfEsXsIfxkgNx6KG@cluster0.z33oori.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    MongooseModule.forFeature([
      {
        name: Users.name,
        schema: UserSchema,
      },
      {
        name: Links.name,
        schema: LinksSchema,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
