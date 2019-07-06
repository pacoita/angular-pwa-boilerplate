import { Share } from './models/share';
import { Joke } from './models/joke';
import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  jokes$: Observable<Joke>;
  sharesData$: Observable<Share>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.jokes$ = this.dataService.getJoke();
    this.sharesData$ = this.dataService.getShares();
  }
}
