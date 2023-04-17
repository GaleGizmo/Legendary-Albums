import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumDetailRoutingModule } from './album-detail-routing.module';
import { AlbumDetailComponent } from './album-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditAlbumModule } from '../edit-album/edit-album.module';


@NgModule({
  declarations: [
    AlbumDetailComponent
  ],
  imports: [
    CommonModule,
    AlbumDetailRoutingModule,
    SharedModule,
    
    EditAlbumModule
  ]
})
export class AlbumDetailModule { }
