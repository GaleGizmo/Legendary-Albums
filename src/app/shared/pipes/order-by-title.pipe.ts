import { Pipe, PipeTransform } from '@angular/core';
import { AlbumI } from 'src/app/core/services/album/models/album.model';

@Pipe({
  name: 'orderByTitle',
})
export class OrderByTitlePipe implements PipeTransform {
  transform(albums: AlbumI[], sortAscending: boolean): AlbumI[] {
    return albums.sort((a, b) =>
      sortAscending
        ? this.compareTitles(a.title, b.title)
        : this.compareTitles(b.title, a.title)
    );
  }

  private compareTitles(titleA: string, titleB: string): number {
    const titleAWithoutArticles = this.removeArticles(titleA);
    const titleBWithoutArticles = this.removeArticles(titleB);
    return titleAWithoutArticles.localeCompare(titleBWithoutArticles);
  }

  private removeArticles(title: string): string {
    return title.replace(/^(The|An|A) /i, '');
  }
}
