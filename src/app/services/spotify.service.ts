import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Servicio de Spotify Listo');
  }

  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${ query }`;
    // tslint:disable-next-line:max-line-length
    const HEADERS: HttpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer BQB9h-RvNtRxjdZzGMNJbs9GmbPLx5zrBlnEOmbdEie6suA55jUZ90d8teIjX5eQArWFy759s87zIoMJEr4'
    });

    return this.http.get( URL, { headers: HEADERS } );
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?country=MX&limit=20').pipe( map( data => data['albums'].items ) );
  }
  getArtists(q: string) {
    return this.getQuery(`search?q=${ q }&type=artist&market=MX`).pipe( map( data => data['artists'].items ) );
  }
  getArtist(id: string) {
    return this.getQuery(`artists/${ id }`);
    // .pipe( map( data=>data['artists'].items ) );
  }
  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=MX`).pipe( map( data => data['tracks'] ) );
  }
}
