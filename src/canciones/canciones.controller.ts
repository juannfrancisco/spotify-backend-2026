import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { Cancion } from 'src/models/cancion.model';

@Controller('canciones')
export class CancionesController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getCanciones():Cancion[]{
        return this.appService.getCanciones();
    }
}
