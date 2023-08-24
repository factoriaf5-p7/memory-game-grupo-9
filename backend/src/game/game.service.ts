import { Injectable, NotFoundException } from '@nestjs/common';
import { jsonData } from './data';

@Injectable()
export class GameService {
  async getThemas(): Promise<any> {
    const themas = jsonData.map((themas) => Object.keys(themas)[0]);
    console.log(themas);
    return themas;
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
