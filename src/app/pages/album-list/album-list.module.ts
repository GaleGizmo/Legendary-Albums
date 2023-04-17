import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumListRoutingModule } from './album-list-routing.module';
import { AlbumListComponent } from './album-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AlbumListComponent,
    
  ],
  imports: [
    CommonModule,
    AlbumListRoutingModule,
    FormsModule,
    SharedModule,
  ]
})
export class AlbumListModule { }
