import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { Playlist } from 'src/models/playlist.model';

@Controller('playlists')
export class PlaylistsController {

    constructor(private readonly appService: AppService) {}
    

    @Get()
    getPlaylists():Playlist[]{
        return this.appService.getPlaylists();
    }

    @Get(':id')
    getPlaylistPorId( @Param('id') id:string ):Playlist{
        return this.appService.getPlaylistPorId( +id );
    }

    @Post()
    crearPlaylist( @Body() playlist:Playlist ):Playlist{
        return this.appService.crearPlaylist(playlist); 
    }

    @Post(':idPlaylist/canciones/:idCancion')
    agregarCancion( 
        @Param('idPlaylist') idPlaylist:string, 
        @Param('idCancion') idCancion:string ):void{
        
        this.appService.agregarCancion(+idPlaylist, +idCancion)
    }


}