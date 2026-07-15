import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { Playlist } from 'src/models/playlist.model';

@Controller('playlists')
export class PlaylistsController {

    constructor(private readonly appService: AppService) {}
    

    @Get()
    getPlaylists():Playlist[]{
        return this.appService.getPlaylists();
    }

    @Post()
    crearPlaylist( @Body() playlist:Playlist ):Playlist{
        return this.appService.crearPlaylist(playlist); 
    }


}