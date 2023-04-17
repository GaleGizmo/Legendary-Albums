import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AlbumService } from 'src/app/core/services/album/album.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  spotiUrl: SafeResourceUrl = '';

  constructor(
    private albumService: AlbumService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const dailyAlbum = localStorage.getItem('albumTitle');
    if (dailyAlbum) {
      this.albumService
        .getAlbumByTitle(JSON.parse(dailyAlbum))
        .subscribe((album) => {
          this.spotiUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            `https://open.spotify.com/embed?uri=spotify:album:${album.spotify}`
          );
          console.log(this.spotiUrl);
        });
    }
  }
}
