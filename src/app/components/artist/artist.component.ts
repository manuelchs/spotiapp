import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  constructor(private activatedRouter:ActivatedRoute, private spotify:SpotifyService) {
    this.activatedRouter.params.subscribe(params => {
      console.log(params['id']);
      this.getArtista(params['id']);
    });
  }

  ngOnInit() {
  }

  getArtista(id:string){
    this.spotify.getArtist(id).subscribe( artista => {
      console.log(artista);
    });
  }

}
