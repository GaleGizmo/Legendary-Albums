import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailComponent } from './album-detail.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: AlbumDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumDetailRoutingModule { }
