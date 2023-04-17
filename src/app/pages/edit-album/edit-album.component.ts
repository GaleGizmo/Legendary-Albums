import { Component } from '@angular/core';
import { AlbumI } from 'src/app/core/services/album/models/album.model';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from 'src/app/core/services/album/album.service';
import { switchMap } from 'rxjs';
@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.scss'],
})
export class EditAlbumComponent {
  public album?: AlbumI;

  constructor(
    private activatedRoute: ActivatedRoute,
    private albumService: AlbumService
  ) {
   
    this.activatedRoute.params.subscribe((params) => {
      const albumTitle = params['title'];
      console.log(albumTitle);
      
      this.albumService.getAlbumByTitle(albumTitle).subscribe((album) => {
        this.album = album;
      });
    });
    console.log(this.album);
  }
}
