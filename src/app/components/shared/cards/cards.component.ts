import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() items: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  verArtista( item: any ) {
    let idArtist;
    if ( item.type === 'artist') {
      idArtist = item.id;
    } else {
      idArtist = item.artists[0].id;
    }
    // console.log(idArtist)
    this.router.navigate( ['/artist', idArtist] );
  }

}
