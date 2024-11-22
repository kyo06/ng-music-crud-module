import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  message: string = '';

  constructor(private route: ActivatedRoute){
    this.message = this.route.snapshot.params['message']; //car message est dans l'url
  }
}
