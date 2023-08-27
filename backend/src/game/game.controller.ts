import { Controller, Get, Param } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  async getAllData() {
    return this.gameService.getAllData();
  }

  @Get('settings')
  async getSettings() {
    return this.gameService.getSettings();
  }

  @Get(':thema')
  async findByThema(@Param('thema') thema: string) {
    return this.gameService.findByThema(thema);
  }

  @Get(':thema/:name')
  async findByNameAndThema(
    @Param('thema') thema: string,
    @Param('name') name: string,
  ) {
    return this.gameService.findByNameAndThema(thema, name);
  }
}
