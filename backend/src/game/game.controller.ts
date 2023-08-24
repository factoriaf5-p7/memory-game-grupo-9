import { Controller, Get, Param } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get('themas')
  async getThemas() {
    return this.gameService.getThemas();
  }

  @Get(':name')
  async findByName(@Param('name') name: string) {
    return this.gameService.findByName(name);
  }
}
