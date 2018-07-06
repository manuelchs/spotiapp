import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;
  constructor(private activatedRouter: ActivatedRoute, private spotify: SpotifyService) {
    this.activatedRouter.params.subscribe(params => {
      console.log(params['id']);
      this.getArtista(params['id']);
      this.loading = true;
    });
  }

  ngOnInit() {
  }

  getArtista(id: string) {
    this.loading = true;

    this.spotify.getArtist(id).subscribe( artist => {
      this.artist = artist;
      console.log(artist);
      this.loading = false;

    });

    this.spotify.getTopTracks(id).subscribe( topTracks => {
     console.log(topTracks);
     this.topTracks = topTracks;
    });
  }

}
