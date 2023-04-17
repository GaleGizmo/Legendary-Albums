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
    // this.activatedRoute.params
    //   .pipe(
    //     switchMap((params) =>
    //       this.albumService.getAlbumByTitle(params['title'])
    //     )
    //   )
    //   .subscribe((album) => {
    //     this.album = album;
    //     ;
        
    //   });
    this.activatedRoute.params.subscribe((params) => {
      const albumTitle = params['title'];
      this.albumService
        .getAlbumByTitle(albumTitle)
        .subscribe((album) => {(this.album = album)});
    });
    console.log(this.album);
  }
  
  
}
