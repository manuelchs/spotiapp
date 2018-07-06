import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  loading: boolean;
  artists: any[] = [];
  errorRequest: boolean;
  errorMessage: string;
  constructor(private spotify: SpotifyService) {
    this.errorRequest = false;
  }

  ngOnInit() {
  }

  searchArtist(q: string) {
    this.errorRequest = false;
    if (q !== '') {
      this.loading = true;
    console.log(q);
    this.spotify.getArtists( q ).subscribe( data => {
      console.log(data);
      this.artists = data;
      this.loading = false;
    }, error => {
      this.errorRequest = true;
      this.loading = false;
      console.log(error);
      this.errorMessage = error.error.error.message;
      console.log(this.errorMessage);
    });
    }
  }

}
