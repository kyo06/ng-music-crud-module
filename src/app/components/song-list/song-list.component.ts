import { Component, inject, Input } from '@angular/core';
import { Song } from '../../models/Song';
import { MusicService } from '../../services/music.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.css'
})
export class SongListComponent {
  @Input() songsList: Song[] = [];

  private musicService = inject(MusicService);
  private subscription = new Subscription();  
  private router = inject(Router);
      
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  deleteSong(id : number){
    const subscription = this.musicService.deleteSong(id).subscribe(() => {
      window.location.reload(); //force la rechargement de la page car on est sur la même page
    });
    this.subscription.add(subscription);
  }

  editSong(id : number){
    this.router.navigate(['/edit', id]);
  }

  likeSong(id: number, liked: boolean){
    const subscription = this.musicService.likeSong(id, liked)
    .subscribe(() => {
      this.songsList.find(song => song.id === id)!.liked = liked;
    });
    this.subscription.add(subscription);
  }
}
