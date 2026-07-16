import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { Artista } from 'src/models/artista.model';

@Controller('artistas')
export class ArtistasController {

    constructor(private readonly appService: AppService) {}

    @Get()
    getArtistas():Artista[]{
        return this.appService.getArtistas();
    }


    @Get(':id')
    getArtista(@Param('id') id:string):Artista{
        return this.appService.getArtistaPorId(+id);
    }

}
