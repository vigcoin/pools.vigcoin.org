import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
declare var $: any;

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  config
  status
  data

  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.getStats(false);

  }

  getReadableCoins(coins) {
		return this.status.config.coinUnits;
  }

  formatLuck(difficulty, shares) {
		var percent = Math.round(shares / difficulty * 100);
        if(!percent) {
		     return '?';
		}		
		else{
			 return percent+'%';
		}

	}

  getStats(promptPassword) {
	  
		var password = this.getCookiesItem('password');
		
		if(!password || promptPassword) {
			password = prompt('Enter admin password');
		}
		
		$('#loading').show();
		this.status = this.dataService.config.api;

		this.dataService.get(this.dataService.config.api + '/stats').subscribe(data => {

		if (Object.keys(data).length > 0) {
			this.status=data;
		  		
			this.dataService.get(this.dataService.config.api + '/admin_stats?password='+password).subscribe(
				data => {
					  
					if (Object.keys(data).length > 0) {
						this.setCookiesItem('password', password, Infinity);
						this.data = data;
						this.updateStatus();
					}
				},
				error => {
					this.removeCookiesItem('password',false,false);
					this.getStats(true);
				}
			);
	    }
	});

  }

  updateStatus() {
		this.data.lastTotalOwed  = this.dataService.getReadableCoins(this.status, this.data.totalOwed, 4);
        this.data.lastTotalPaid  = this.dataService.getReadableCoins(this.status, this.data.totalPaid, 4);
        this.data.lastTotalMined  = this.dataService.getReadableCoins(this.status, this.data.totalRevenue, 4);
        this.data.lastProfit  = this.dataService.getReadableCoins(this.status, (this.data.totalRevenue - this.data.totalOwed - this.data.totalPaid), 4);
        this.data.lastAverageLuck  = this.formatLuck(this.data.totalDiff, this.data.totalShares);
        this.data.lastOrphanPercent  = (this.data.blocksOrphaned / this.data.blocksUnlocked * 100).toFixed(2);
        this.data.lastRegisteredAddresses  = this.data.totalWorkers;
 
  }

  renderData(data) {
		$('#totalOwed').text(this.getReadableCoins(data.totalOwed));
		$('#totalPaid').text(this.getReadableCoins(data.totalPaid));
		$('#totalMined').text(this.getReadableCoins(data.totalRevenue));
		$('#profit').text(this.getReadableCoins(data.totalRevenue - data.totalOwed - data.totalPaid));
		$('#averageLuck').html(this.formatLuck(data.totalDiff, data.totalShares));
		$('#orphanPercent').text((data.blocksOrphaned / data.blocksUnlocked * 100).toFixed(2));
		$('#registeredAddresses').text(data.totalWorkers);
  }
  
  getCookiesItem(key) {
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" +
      encodeURIComponent(key).replace(/[\-\.\+\*]/g,
        "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  }
  
   setCookiesItem(sKey, sValue, vEnd, sPath = '', sDomain = "", bSecure = false) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
    var sExpires = "";
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
          break;
        case String:
          sExpires = "; expires=" + vEnd;
          break;
        case Date:
          sExpires = "; expires=" + vEnd.toUTCString();
          break;
      }
    }
    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
    return true;
  }
  
  removeCookiesItem(sKey, sPath, sDomain) {
    if (!sKey || !this.hasCookiesItem(sKey)) { return false; }
    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
    return true;
  }
  hasCookiesItem(sKey) {
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
  }
}
