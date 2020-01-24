import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getChuckNorrisJoke() {
    return this.http.get('https://api.chucknorris.io/jokes/random');
  }

  public getTrumpJoke() {
    return this.http.get('https://api.tronalddump.io/random/quote');
  }
}
