import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  loading:boolean;
  response:any;
  artists:any[] = [];
  constructor(private spotify:SpotifyService) {
  }

  ngOnInit() {
  }

  searchArtist(q:string){
    if(q != ""){
      this.loading = true;
    console.log(q);
    this.spotify.getArtists( q ).subscribe( data=> {
      console.log(data);
      this.artists = data;
      this.loading = false;
    });
    }
  }

}
