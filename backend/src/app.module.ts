import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { MongooseModule } from '@nestjs/mongoose';
import { GameModule } from './game/game.module';

@Module({
  imports: [
    // MongooseModule.forRoot(
    //   'mongodb+srv://memorygame09:<UAp5BsaipgmC4z9V>@memory-game.odjtalb.mongodb.net/?retryWrites=true&w=majority',
    // ),
    GameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
