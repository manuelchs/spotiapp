import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http:HttpClient) {
    console.log('Servicio de Spotify Listo');
  }

  getQuery(query:string){
    const URL:string = `https://api.spotify.com/v1/${ query }`;
    const HEADERS: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer BQDaO66Ol-HdBNHuoyGPjgQJSZ53XRXdlQWPd16aqG4hjSk7kevsIOe_Mwxf4N1rc1uCJYgt5ifxZWJbUxw'
    });

    return this.http.get(URL, {headers: HEADERS});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?country=MX&limit=20').pipe( map( data => data['albums'].items ) );
  }
  getArtist(q:string){
    return this.getQuery(`search?q=${ q }&type=artist&market=MX`).pipe( map( data=>data['artists'].items ) );
  }
}
