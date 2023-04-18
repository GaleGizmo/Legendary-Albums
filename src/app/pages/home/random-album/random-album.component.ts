import { AlbumService } from './../../../core/services/album/album.service';
import { Component, OnInit } from '@angular/core';
import { ApiAlbumService } from 'src/app/core/services/album/api/api-album.service';
import { AlbumI } from 'src/app/core/services/album/models/album.model';

@Component({
  selector: 'app-random-album',
  templateUrl: './random-album.component.html',
  styleUrls: ['./random-album.component.scss'],
})
export class RandomAlbumComponent implements OnInit {
  constructor(
    private apiAlbumService: ApiAlbumService,
    private albumService: AlbumService
  ) {}

  public album?: AlbumI;
  public textClass: string = 'home';
  public allTitles?: string[] = [];
  public lastTimeExcuted?: Date;

  ngOnInit(): void {
    const albumTitle = localStorage.getItem('albumTitle');
    if (albumTitle) {
      this.albumService
        .getAlbumByTitle(JSON.parse(albumTitle))
        .subscribe((album) => {
          this.album = album;
        });
    }
    this.getAllTitlesAndShowOne();
  }
  public getAllTitlesAndShowOne() {
    this.apiAlbumService.getAllTitles().subscribe((titles: string[]) => {
      this.allTitles = titles;
      this.showRandomAlbum(this.allTitles);
    });
  }

  public showRandomAlbum(albumTitles: string[]) {
    const hoy = new Date();
    const lastTimeExcuted = localStorage.getItem('lastTimeExcuted');
    if (
      !lastTimeExcuted ||
      hoy.getDate() !== new Date(lastTimeExcuted).getDate()
    ) {
      const randomAlbum: string =
        albumTitles[Math.floor(Math.random() * albumTitles.length)];
      localStorage.setItem('lastTimeExcuted', hoy.toString());

      this.albumService.getAlbumByTitle(randomAlbum).subscribe((album) => {
        this.album = album;
        localStorage.setItem('albumTitle', JSON.stringify(randomAlbum));
        // this.albumService.updateDailyAlbum(randomAlbum);
      });
    }
  }
}
