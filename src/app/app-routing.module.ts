import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    
    path: 'albums-list',
   
    loadChildren: () => import('./pages/album-list/album-list.module').then(m => m.AlbumListModule)
  },
  {
    path: 'album-detail/:title',
   
    loadChildren: () => import('./pages/album-detail/album-detail.module').then(m => m.AlbumDetailModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'create-album',
    loadChildren: () => import('./pages/add-album/add-album.module').then(m => m.AddAlbumModule)
  },
  {
    path: 'edit-album/:title',
    loadChildren: () => import('./pages/edit-album/edit-album.module').then(m => m.EditAlbumModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
