import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTuitDto, UpdateTuitDto } from './dto';
import { Tuit } from './tuits.entity';
import { TuitsService } from './tuits.service';

@Controller('tuits')
export class TuitsController {
  constructor(private readonly tuitService: TuitsService) {}

  //Primera ruta con query
  @Get()
  getTuits(@Query() filterQuery): Tuit[] {
    const { searchTerm, orderBy } = filterQuery;

    return this.tuitService.getTuits();
  }

  //Segunda ruta
  @Get(':id')
  getTuit(@Param('id') id: number ): Tuit {
    return this.tuitService.getTuit(id);
  }

  //Tercera ruta
  @Post()
  createTuit(@Body() message: CreateTuitDto): void {
    console.log(message instanceof CreateTuitDto)
    return this.tuitService.createTuit(message);
  }

  // Cuarta ruta
  @Patch(':id')
  updateTuit(@Param('id') id: number, @Body() tuit: UpdateTuitDto): Tuit {
    return this.tuitService.updateTuit(id, tuit);
  }

  // Quinta ruta
  @Delete(':id')
  deleteTuit(@Param('id') id: number): void {
    return this.tuitService.removeTuit(id);
  }
}
