import { Pipe, PipeTransform } from '@angular/core';
import { AlbumI } from 'src/app/core/services/album/models/album.model';

@Pipe({
  name: 'orderByYear'
})
export class OrderByYearPipe implements PipeTransform {

  transform(albums: AlbumI[], yearFilter: Number): AlbumI[] {
    
    if (!yearFilter) return albums;
    return albums.filter(album => album.year <= yearFilter)
  }

}
