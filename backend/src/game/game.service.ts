import { Injectable, NotFoundException } from '@nestjs/common';
import { jsonData } from './data';

@Injectable()
export class GameService {
  async getSettings(): Promise<any> {
    const themas = jsonData.map((themas) => Object.keys(themas)[0]);
    const settings = { themas, difficulty: [0, 1, 2] };
    console.log(settings);
    return settings;
  }

  async findByName(name: string): Promise<any> {
    let result;
    for (const category of jsonData) {
      result = category[name];
      if (result) {
        console.log(category[name]);
        return result;
      }
    }
    throw new NotFoundException(`Game ${name} not found`);
  }
}
