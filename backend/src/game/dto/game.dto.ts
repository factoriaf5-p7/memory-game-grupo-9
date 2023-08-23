import { IsString, IsUrl } from 'class-validator';

export class HeroDto {
  @IsString()
  name: string;

  @IsUrl()
  img: string;
}

export class GameDto {
  @IsString({ each: true })
  superheroes: HeroDto[];

  @IsString({ each: true })
  kombat: HeroDto[];
}
