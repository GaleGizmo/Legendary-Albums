import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddAlbumRoutingModule } from './add-album-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddAlbumComponent } from './add-album.component';


@NgModule({
  declarations: [
    AddAlbumComponent
  ],
  imports: [
    CommonModule,
    AddAlbumRoutingModule,
    SharedModule
  ]
})
export class AddAlbumModule { }
