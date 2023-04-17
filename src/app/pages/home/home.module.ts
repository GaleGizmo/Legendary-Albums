import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RandomAlbumComponent } from './random-album/random-album.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlayerComponent } from './player/player.component';


@NgModule({
  declarations: [
    HomeComponent,
    RandomAlbumComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
