import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditAlbumRoutingModule } from './edit-album-routing.module';
import { EditAlbumComponent } from './edit-album.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditAlbumComponent
  ],
  imports: [
    CommonModule,
    EditAlbumRoutingModule,
    SharedModule
  ],
  exports:[
    EditAlbumComponent
  ]
})
export class EditAlbumModule { }
