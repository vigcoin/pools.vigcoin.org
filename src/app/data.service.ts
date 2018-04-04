import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class DataService {
  config: any = {
    api: "http://vig-pool.tyk.im:8119",

    api_blockexplorer: "http://vig-pool.tyk.im:19810",

    poolHost: "vig-pool.tyk.im",

    irc: "irc.freenode.net/#vig",

    email: "calidion@gmail.com",

    cryptonatorWidget: ["{symbol}-BTC", "{symbol}-USD", "{symbol}-EUR"],

    easyminerDownload: "https://github.com/zone117x/cryptonote-easy-miner/releases/",

    blockchainExplorer: "/?hash={id}#blockchain_block",

    transactionExplorer: "/?hash={id}#blockchain_transaction",

    themeCss: "themes/default-theme.css",

    networkStat: {
      "vig": [
        ["vig.tyk.im", "http://vig-pool.tyk.im:8119"],
        ["pool.vigcoin.org", "pool.vigcoin.org:8119"]
      ],
      "bcn": [
        ["democats.org", "http://pool.democats.org:7603"]
      ]
    }
  }

  constructor(
    private http: HttpClient
  ) { }

  get(url) {
    return this.http.get(url);
  }
  post(url, data) {
    return this.http.post(url, data);
  }

}
