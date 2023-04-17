import { Pipe, PipeTransform } from '@angular/core';
import { AlbumI } from 'src/app/core/services/album/models/album.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: AlbumI[], filterKey:string): AlbumI[] {
    if (!value || !filterKey|| filterKey.length<2) {return value}
    return value.filter(album=>{
      return album.title.toLowerCase().includes(filterKey.toLocaleLowerCase())
    });
  }

}
