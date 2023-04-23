import { AlbumService } from './../../../core/services/album/album.service';
import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { ApiAlbumService } from 'src/app/core/services/album/api/api-album.service';
import { AlbumI } from 'src/app/core/services/album/models/album.model';
import * as seedrandom from 'seedrandom';

@Component({
  selector: 'app-random-album',
  templateUrl: './random-album.component.html',
  styleUrls: ['./random-album.component.scss'],
})
export class RandomAlbumComponent implements OnInit {
  constructor(
    private apiAlbumService: ApiAlbumService,
    public albumService: AlbumService
  ) {}
 
  public album?: AlbumI;
  public textClass: string = 'home';
  public allTitles?: string[] = [];
  public lastTimeExcuted?: Date;

  ngOnInit(): void {
    const albumTitle = localStorage.getItem('albumTitle');
    this.albumService.isLoading = true;
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
    const seedDate = '2023-04-23';
    const rng = seedrandom(seedDate);
    const lastTimeExcuted = localStorage.getItem('lastTimeExcuted');
    if (
      !lastTimeExcuted ||
      hoy.getDate() !== new Date(lastTimeExcuted).getDate()
    ) {
      const randomAlbum: string =
        albumTitles[Math.floor(rng() * albumTitles.length)];
      localStorage.setItem('lastTimeExcuted', hoy.toString());

      this.albumService.getAlbumByTitle(randomAlbum).subscribe((album) => {
        this.album = album;
        localStorage.setItem('albumTitle', JSON.stringify(randomAlbum));
        
        // this.albumService.updateDailyAlbum(randomAlbum);
      });
    }
  }
}
