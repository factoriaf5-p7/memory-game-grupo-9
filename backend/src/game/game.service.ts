import { Injectable, NotFoundException } from '@nestjs/common';
import { jsonData } from './data';

@Injectable()
export class GameService {
  getAllData(): any {
    console.log(jsonData);
    return jsonData;
  }

  getSettings(): any {
    const settings = jsonData.map((theme) => {
      return {
        thema: theme.thema,
        background: theme.background,
      };
    });
    console.log(settings);
    return { themas: settings };
  }

  findByThema(thema: string): any {
    const themeData = jsonData.find((theme) => theme.thema === thema);
    if (themeData) {
      return themeData.cards;
    }
    throw new NotFoundException(`Theme ${thema} not found`);
  }
  
  findByNameAndThema(thema: string, name: string): any {
    const themeData = jsonData.find((theme) => theme.thema === thema);
    if (themeData) {
      const card = themeData.cards.find((card) => card.name === name);
      if (card) {
        console.log(card);
        return card;
      }
      throw new NotFoundException(`Card ${name} not found in theme ${thema}`);
    }
    throw new NotFoundException(`Theme ${thema} not found`);
  } 
}
