import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loading: boolean;
  newReleases: any[] = [];
  errorRequest: boolean;
  errorMessage: string;
  constructor(private spotify: SpotifyService) {
    this.errorRequest = false;
    this.loading = true;
    this.spotify.getNewReleases().subscribe( data => {
      console.log(data);
      this.newReleases = data;
      this.loading = false;
    }, error => {
      this.errorRequest = true;
      this.loading = false;
      console.log(error);
      this.errorMessage = error.error.error.message;
      console.log(this.errorMessage);
    });
  }

  ngOnInit() {
  }

}
