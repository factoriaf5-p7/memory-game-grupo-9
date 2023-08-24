import { Controller, Get, Param } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get('settings')
  async getSettings() {
    return this.gameService.getSettings();
  }

  @Get(':name')
  async findByName(@Param('name') name: string) {
    return this.gameService.findByName(name);
  }
}
