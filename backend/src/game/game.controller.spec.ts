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

  describe('root', () => {
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });
  });

  describe('getThemas', () => {
    it('should return an array of games', async () => {
      // Arrange
      const result = ['game1', 'game2'];
      jest.spyOn(service, 'getThemas').mockResolvedValue(result);

      // Act
      const games = await controller.getThemas();

      // Assert
      expect(games).toBe(result);
    });
  });

  describe('findByName', () => {
    it('should return a game by name', async () => {
      // Arrange
      const gameName = 'game1';
      const result = { name: gameName /* other properties */ };
      jest.spyOn(service, 'findByName').mockResolvedValue(result);

      // Act
      const game = await controller.findByName(gameName);

      // Assert
      expect(game).toBe(result);
    });
  });
});
