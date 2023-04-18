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
     
      this.loadAlbum(dailyAlbum)
    } 
  }
  // ngOnInit(): void {
  //   this.albumService.albumTitle$.subscribe((albumTitle) => {
  //     if (albumTitle) {
  //       this.albumService.getAlbumByTitle(albumTitle).subscribe((album) => {
  //         const spotifyUrl = `https://open.spotify.com/embed?uri=spotify:album:${album.spotify}`;
  //         this.spotiUrl = this.sanitizer.bypassSecurityTrustResourceUrl(spotifyUrl);
  //       });
  //     }
  //   });
  // }
public loadAlbum(albumTitle:string){
  this.albumService
        .getAlbumByTitle(JSON.parse(albumTitle))
        .subscribe((album) => {
          this.spotiUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            `https://open.spotify.com/embed?uri=spotify:album:${album.spotify}`
          );
          
        });

}
  
}
