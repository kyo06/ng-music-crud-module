import { ChangeDetectorRef, Component } from '@angular/core';
import { Song } from '../../models/Song';
import { MusicService } from '../../services/music.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-music-app',
  templateUrl: './music-app.component.html',
  styleUrl: './music-app.component.css'
})
export class MusicAppComponent {
  songs: Song[] = [];
  
  // équivalent de l'autre constructeur
  /*
  private musicService: MusicService;
  constructor(musicService: MusicService){
    this.musicService = musicService;
  }
  */

  /*
  private musicService: MusicService = inject(MusicService);
  constructor(){
    this.songs = this.musicService.getSongs();
  }
  */

  private subscription: Subscription = new Subscription();

  constructor(private musicService: MusicService, private changeDetectorRef: ChangeDetectorRef, private router: Router) {
  }

  //Méthode qui s'exécute lors de l'initialisation du composant
  ngOnInit(): void {
    this.loadSongs();
  }

  loadSongs(): void{
    const subscription = this.musicService.getSongs()
    .subscribe(songs => {
      songs.forEach(song => {
        if(song.date) {
          song.date = new Date(song.date);
        }
      });
      this.songs = songs;
    });
    this.subscription.add(subscription);
  }

  //Méthode qui s'exécute lors de la destruction du composant
  ngOnDestroy(): void {
    //Pour éviter les fuites de mémoire
    this.subscription.unsubscribe();
  }

  displaySongAddForm(): void{
    this.router.navigate(['/add']);
  }

}

