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
      'Authorization': 'Bearer BQAwoEBGziyY697yshPb0xJPUcTucnauCrnF4FDaLvUpFHTRLSpVVnRVbb1b9hr_2HzTWJGDmcbh9Kb0d4E'
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
