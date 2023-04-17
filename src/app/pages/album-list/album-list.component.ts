import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from 'src/app/core/services/album/album.service';
import { AlbumI } from 'src/app/core/services/album/models/album.model';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
})
export class AlbumListComponent implements OnInit {
  public albums?: AlbumI[];
  public inputValue: string = '';
  public yearFilter: Number = 2023;
  public textClass: string = 'list';
  constructor(private albumService: AlbumService) {}

  public ngOnInit(): void {
    this.getAlbums();
  }

  public getAlbums() {
    this.albumService.getAlbums().subscribe((albums: AlbumI[]) => {
      this.albums = albums;
    });
  }
}
