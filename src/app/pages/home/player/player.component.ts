import { Component, OnInit, OnDestroy,  NgZone} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AlbumService } from 'src/app/core/services/album/album.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit, OnDestroy {
  spotiUrl: SafeResourceUrl = '';
  dailyAlbumTitle?:string;
  private readonly storageListener:(event: StorageEvent)=>void=this.onStorageChange.bind(this);
  constructor(
    private albumService: AlbumService,
    private sanitizer: DomSanitizer,
    private ngZone:NgZone
  ) {}

  ngOnInit(): void {
    
    window.addEventListener('storage', this.storageListener);
    const albumTitle = localStorage.getItem('albumTitle');
    if (albumTitle!==null) {this.dailyAlbumTitle = albumTitle;
    
      this.loadAlbum(this.dailyAlbumTitle);
    
     
    
  }}
  ngOnDestroy(): void {
    
    window.removeEventListener('storage', this.storageListener);
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
  
  if (event.key === 'albumTitle' && event.newValue !== this.dailyAlbumTitle) {
    if (event.newValue!==null)
    this.dailyAlbumTitle = event.newValue;
    this.ngZone.run(() => {
      this.loadAlbum(this.dailyAlbumTitle!);
    });
  }
}
}
