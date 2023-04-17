import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlbumComponent } from './add-album.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: AddAlbumComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddAlbumRoutingModule { }
