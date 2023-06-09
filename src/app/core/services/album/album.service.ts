import { Injectable } from '@angular/core';
import { ApiAlbumService } from './api/api-album.service';
import { Observable, map, filter, tap, catchError, throwError,switchMap, BehaviorSubject } from 'rxjs';
import { AlbumI, ApiAlbumI, ApiAuthorI, AuthorI } from './models/album.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private apiAlbumService: ApiAlbumService, private http:HttpClient) {}

//   private albumTitleSubject = new BehaviorSubject<string | null>(null);
//   albumTitle$ = this.albumTitleSubject.asObservable();

// updateDailyAlbum(albumTitle: string) {
//     localStorage.setItem('albumTitle', JSON.stringify(albumTitle));
//     this.albumTitleSubject.next(albumTitle);
//   }
public isLoading:boolean=false
  public getAlbums(): Observable<AlbumI[]> {
    this.isLoading=true
    return this.apiAlbumService.getApiAlbums().pipe(
      filter((albums: ApiAlbumI[]) => {
        return albums.length > 0;
      }),
      map((albums: ApiAlbumI[]) => this.transformAlbums(albums)),
      tap(() => {
        
        this.isLoading=false
      })
    );
  }

  public getAlbumByTitle(title: string): Observable<AlbumI> {
    return this.apiAlbumService
      .getApiAlbumByTitle(title)
      .pipe(tap(() => this.isLoading = true),
        map((apiAlbum: ApiAlbumI) => this.transformAlbum(apiAlbum)),
        tap(() => this.isLoading = false),);
  }

  public getAlbumAuthorByTitle(title: string): Observable<{ album: AlbumI; author: AuthorI | undefined }> {
    this.isLoading=true
    return this.apiAlbumService.getApiAlbumByTitle(title).pipe(
      map((apiAlbum: ApiAlbumI) => this.transformAlbum(apiAlbum)),
      switchMap(album => {
        return this.apiAlbumService.getApiAuthors().pipe(
          map((apiAuthors: ApiAuthorI[]) => apiAuthors.map(apiAuthor => this.transformAuthor(apiAuthor))),
          map(authors => {
           
            
            const albumAuthor = authors.find(author => author.name === album.artist);
            
            return { album, author: albumAuthor };
          })
        );
      }),
      tap(() => this.isLoading = false)
    );
  }
  public createAlbum(body: AlbumI): Observable<AlbumI> {
    return this.apiAlbumService
      .createApiAlbum(body)
      .pipe(map((apialbum) => this.transformAlbum(apialbum)),
      catchError(error => {
        return throwError(error);
      }));
  }

  public editAlbum(body: AlbumI, title:string): Observable<AlbumI> {
    return this.apiAlbumService
      .editApiAlbum(body, title)
      .pipe(map((apialbum) => this.transformAlbum(apialbum)));
  }

  public deleteAlbum(title:string):Observable<AlbumI>{
    return this.apiAlbumService
      .deleteApiAlbum(title)
      .pipe(map((apialbum) => this.transformAlbum(apialbum)));
  }

  public uploadImage(file: File): Observable<any> {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'legendary');
    data.append('cloud_name', 'dwv0trjwd');
    
    return this.http.post('https://api.cloudinary.com/v1_1/dwv0trjwd/image/upload', data);
  }
  private transformAlbums(apiAlbums: ApiAlbumI[]): AlbumI[] {
    const albumsTransformed = apiAlbums.map((album) =>
      this.transformAlbum(album)
    );
    return albumsTransformed;
  }
  private transformAlbum(apiAlbum: ApiAlbumI): AlbumI {
    delete apiAlbum._id;
    delete apiAlbum.updatedAt
    delete apiAlbum.createdAt;
    return apiAlbum;
  }
  private transformAuthor(apiAuthor: ApiAuthorI): AuthorI {
    delete apiAuthor._id;
    
    return apiAuthor;
  }
}
