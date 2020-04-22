import { Joke } from './models/joke';
import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { CatsPhoto } from './models/cats-photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  joke$: Observable<Joke>;
  catUrl$: Observable<CatsPhoto>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.joke$ = this.dataService.getJoke();
    this.catUrl$ = this.dataService.getCats();
  }
}
