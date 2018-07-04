import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  response:any;
  newReleases:any[] = [];
  constructor(private spotify:SpotifyService) {
    this.spotify.getNewReleases().subscribe( data => {
      console.log(data);
      this.newReleases = data;
    });
  }

  ngOnInit() {
  }

}
