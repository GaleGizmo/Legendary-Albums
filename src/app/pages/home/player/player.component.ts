import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AlbumService } from 'src/app/core/services/album/album.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit, OnDestroy {
  spotiUrl: SafeResourceUrl = '';
  
  constructor(
    private albumService: AlbumService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    window.addEventListener('storage', this.onStorageChange.bind(this));
    const dailyAlbum = localStorage.getItem('albumTitle');
    if (dailyAlbum) {
     
      this.loadAlbum(dailyAlbum)
    } 
  }
  ngOnDestroy(): void {
    window.removeEventListener('storage', this.onStorageChange.bind(this));
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
private onStorageChange(event: StorageEvent) {
  if (event.key === 'albumTitle') {
    const albumTitle = event.newValue;
   
  }
}
}
