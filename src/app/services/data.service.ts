import { Share } from './../models/share';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Joke } from '../models/joke';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) {}
  /**
   * Randomly returns daddy jokes from: https://icanhazdadjoke.com
   */
  getJoke() {
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.httpClient.get<Joke>('https://icanhazdadjoke.com', { headers });
  }

  /**
   * Retrieves shares data from https://www.worldtradingdata.com
   */
  getShares() {
    return this.httpClient
      .get<Share>(
        `https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP,TWTR&api_token=demo`
      )
      .pipe(map((res: any) => this.mapToShareDto(res.data[0])));
  }

  private mapToShareDto(sharesData: any) {
    let shareDto: Share;
    if (sharesData) {
      shareDto = {
        name: sharesData.name,
        price: sharesData.price,
        currency: sharesData.currency,
        dayHigh: sharesData.day_high,
        dayLow: sharesData.day_low,
        lastTradeTime: !sharesData.last_trade_time || sharesData.last_trade_time === 'N/A' ? '' : sharesData.last_trade_time
      };
    }

    return shareDto;
  }
}
