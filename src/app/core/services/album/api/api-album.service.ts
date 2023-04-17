import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumI, ApiAlbumI, ApiAuthorI, AuthorI } from '../models/album.model';
// const API_URL='http://localhost:8000'
const API_URL='https://legendary-api.vercel.app'
@Injectable({
  providedIn: 'root'
})
export class ApiAlbumService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiAlbums(): Observable<ApiAlbumI[]>{
    return this.http.get<ApiAlbumI[]>(`${API_URL}/albums`)
  }
  public getAllTitles(): Observable<string[]>{
    return this.http.get<string[]>(`${API_URL}/albums/titles/`)
  }

  public getApiAlbumByTitle(title:string):Observable<ApiAlbumI>{
    return this.http.get<ApiAlbumI>(`${API_URL}/albums/album/${title}`)
  }

  public createApiAlbum(body:AlbumI):Observable<ApiAlbumI>{
    return this.http.post<ApiAlbumI>(`${API_URL}/albums`, body)
  }

  public editApiAlbum(body:AlbumI, title:string):Observable<ApiAlbumI>{
    return this.http.put<ApiAlbumI>(`${API_URL}/albums/${title}`, body)
  }

  public deleteApiAlbum(title:string):Observable<ApiAlbumI>{
    return this.http.delete<ApiAlbumI>(`${API_URL}/albums/${title}`)
  }
  public getApiAuthors():Observable<ApiAuthorI[]>{
    return this.http.get<ApiAuthorI[]>(`${API_URL}/author`)
  }
}
