import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { filter, switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AlbumService } from 'src/app/core/services/album/album.service';
import { ApiAlbumService } from 'src/app/core/services/album/api/api-album.service';
import {
  AlbumI,
  AuthorI,
} from 'src/app/core/services/album/models/album.model';
import { ModalService } from './../../core/services/modal/modal.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss'],
})
export class AlbumDetailComponent implements OnInit, OnDestroy {
  public album?: AlbumI;
  public edit?: boolean = false;
  public author?: AuthorI;
  private routerEventSubscription?: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    public albumService: AlbumService,
    private apiAlbumService: ApiAlbumService,
    private router: Router,
    public modalService: ModalService
  ) {
    this.activatedRoute.params
      .pipe(
        switchMap((params) =>
          this.albumService.getAlbumAuthorByTitle(params['title'])
        )
      )
      .subscribe(({ album, author }) => {
        this.album = album;
        this.author = author;
      });
  }

  ngOnInit() {
    this.routerEventSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(() => {
        if (this.modalService.showSubject.value) {
          this.modalService.close();
        }
      });
  }

  ngOnDestroy() {
    if (this.routerEventSubscription) {
      this.routerEventSubscription.unsubscribe();
    }
  }

  public editThisAlbum(title:string) {
    this.router.navigate(['edit-album',title])
  }

  public removeAlbum(title: string) {
    this.modalService.open('deleteAlbumModal')
  }

  public confirmDelete(title: string | undefined) {
    if (title) {
      this.apiAlbumService.deleteApiAlbum(title)
        .subscribe(() => {
          this.modalService.close();
          this.router.navigate(['../albums-list']);
        });
    }
  } 
}
