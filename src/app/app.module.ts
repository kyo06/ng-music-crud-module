import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetcharPipe } from './pipes/getchar.pipe';
import { GetYearPipe } from './pipes/get-year.pipe';
import { SongListComponent } from './components/song-list/song-list.component';
import { SongFormComponent } from './components/song-form/song-form.component';
import { MusicAppComponent } from './components/music-app/music-app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ShowAnimationDirective } from './directives/show-animation.directive';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MusicService } from './services/music.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    //components
    AppComponent,
    MusicAppComponent,      
    SongFormComponent,
    SongListComponent,    
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
    SharedModule
  ],
  providers: [
    //services
    provideHttpClient(), 
    MusicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
