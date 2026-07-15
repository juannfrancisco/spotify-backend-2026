import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaylistsController } from './playlists/playlists.controller';
import { CancionesController } from './canciones/canciones.controller';
import { ArtistasController } from './artistas/artistas.controller';

@Module({
  imports: [],
  controllers: [AppController, PlaylistsController, CancionesController, ArtistasController],
  providers: [AppService],
})
export class AppModule {}
