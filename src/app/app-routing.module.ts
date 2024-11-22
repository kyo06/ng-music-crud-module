import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicAppComponent } from './components/music-app/music-app.component';
import { SongFormComponent } from './components/song-form/song-form.component';

// définition des routes
// avec les modules, utiler component et pas loadChildren
// si un composant est défini dans un autre module, il faut utiliser loadChildren
const routes: Routes = [
  {
    path: '',
    component: MusicAppComponent
  },
  {
    path: 'add',
    component: SongFormComponent
  },
  {
    path: 'edit/:id',
    component: SongFormComponent
  },
  {
    path: '404/:message',
    loadChildren: () => import('./shared/shared-routing.module').then(m => m.SharedRoutingModule)
  },
  {
    path: '**',
    redirectTo: '/404/Page not found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
