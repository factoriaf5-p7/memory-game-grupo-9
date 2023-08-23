import { Injectable, NotFoundException } from '@nestjs/common';
import { jsonData } from './data';

@Injectable()
export class GameService {
  async getGameAll(): Promise<any> {
    return jsonData;
  }

  async findByName(name: string): Promise<any> {
    let result;
    for (const category of jsonData) {
      result = category[name];
      if (result) {
        return result;
      }
    }
    throw new NotFoundException(`Game ${name} not found`);
  }
}

//controler llame al serivce y que devuelva el []
//service haga el fltrado y me devuelva el []
//en los dos escribir el error!
