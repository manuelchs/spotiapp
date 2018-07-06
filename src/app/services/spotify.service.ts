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
      'Authorization': 'Bearer BQDYl-9hFsJfvioamqXzxXl-drP0kb1vTMRaV7pE6V5K124mrvjma_94EocCqr7QV3V2zWrYKWIIzYOCLc8'
    });

    return this.http.get(URL, {headers: HEADERS});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?country=MX&limit=20').pipe( map( data => data['albums'].items ) );
  }
  getArtists(q:string){
    return this.getQuery(`search?q=${ q }&type=artist&market=MX`).pipe( map( data=>data['artists'].items ) );
  }
  getArtist(id:string){
    return this.getQuery(`artists/${ id }`);
    //.pipe( map( data=>data['artists'].items ) );
  }
}
