import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { AlbumService } from 'src/app/core/services/album/album.service';
import { ApiAlbumService } from 'src/app/core/services/album/api/api-album.service';
import {
  AlbumI,
  AuthorI,
} from 'src/app/core/services/album/models/album.model';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss'],
})
export class AlbumDetailComponent {
  public album?: AlbumI;
  public edit?: boolean = false;
  public author?: AuthorI;

  constructor(
    private activatedRoute: ActivatedRoute,
    public albumService: AlbumService,
    private apiAlbumService: ApiAlbumService,
    private router: Router
  ) {
    this.activatedRoute.params
      .pipe(
        switchMap((params) =>
          this.albumService.getAlbumAuthorByTitle(params['title'])
        )
      )
      .subscribe(({ album, author }) => {
        this.album = album;
        this.author = author;
        console.log(author);
      });
  }

  public editThisAlbum(title:string) {
    // this.edit = true;
    this.router.navigate(['edit-album',title])

    
  }
  public removeAlbum(title: string) {
    const confirmDelete = window.confirm(
      '¿Seguro que quieres borrar el album?'
    );
    if (confirmDelete) {
      this.apiAlbumService
        .deleteApiAlbum(title)
        .subscribe(() => this.router.navigate(['../albums-list']));
    } else return;
  }
}
