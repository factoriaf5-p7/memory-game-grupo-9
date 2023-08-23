import { Test, TestingModule } from '@nestjs/testing';
import { GameController } from './game.controller';
import { GameService } from './game.service';

describe('GameController', () => {
  let controller: GameController;
  let service: GameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameController],
      providers: [GameService],
    }).compile();

    controller = module.get<GameController>(GameController);
    service = module.get<GameService>(GameService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getGameAll', () => {
    it('should return an array of games', async () => {
      const result = ['game1', 'game2'];
      jest.spyOn(service, 'getGameAll').mockResolvedValue(result);

      expect(await controller.getGameAll()).toBe(result);
    });
  });

  describe('findByName', () => {
    it('should return a game by name', async () => {
      const gameName = 'game1';
      const result = { name: gameName /* other properties */ };
      jest.spyOn(service, 'findByName').mockResolvedValue(result);

      expect(await controller.findByName(gameName)).toBe(result);
    });
  });
});
