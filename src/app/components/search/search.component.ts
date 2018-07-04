import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  response:any;
  artists:any[] = [];
  constructor(private spotify:SpotifyService) { }

  ngOnInit() {
  }

  searchArtist(q:string){
    console.log(q);
    this.spotify.getArtist( q ).subscribe( data=> {
      console.log(data);
      this.artists = data;
    });
  }

}
