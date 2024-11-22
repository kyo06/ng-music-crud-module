import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetcharPipe } from './pipes/getchar.pipe';
import { GetYearPipe } from './pipes/get-year.pipe';
import { SongListComponent } from './components/song-list/song-list.component';
import { SongFormComponent } from './components/song-form/song-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MusicAppComponent } from './components/music-app/music-app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ShowAnimationDirective } from './directives/show-animation.directive';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MusicService } from './services/music.service';

@NgModule({
  declarations: [
    //components
    AppComponent,
    MusicAppComponent,      
    SongFormComponent,
    SongListComponent,    
    NotFoundComponent,
    //pipes
    GetcharPipe,
    GetYearPipe,
    //directives
    HighlightDirective,
    ShowAnimationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
  ],
  providers: [
    //services
    provideHttpClient(), 
    MusicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
