import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Input, Output, EventEmitter } from '@angular/core';
import { AlbumI } from 'src/app/core/services/album/models/album.model';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent {
  constructor( private router: Router) {}

  @Input() public albumShown?: AlbumI;
  @Input() public textClass:string=''

  public navigateToDetail(title: string) {
    this.router.navigate(['album-detail', title]);
  }
}
