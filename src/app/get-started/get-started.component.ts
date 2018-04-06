import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
declare var $: any;


@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {
  status
  config
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.config = this.dataService.config;
    this.dataService.get(this.dataService.config.api + '/stats').subscribe(data => {
      if (Object.keys(data).length > 0) {
        this.status = data;
        console.log(this.status);
      }
    });

    let currentPage = {
      destroy: function () {

      },
      init: function () {
      },
      update: function () {

        var portsJson = JSON.stringify(this.status.config.ports);
        if (lastPortsJson !== portsJson) {
          lastPortsJson = portsJson;
          var $miningPortChildren = [];
          for (var i = 0; i < this.status.config.ports.length; i++) {
            var portData = this.status.config.ports[i];
            var $portChild = $(miningPortTemplate);
            $portChild.find('.miningPort').text(portData.port);
            $portChild.find('.miningPortDiff').text(portData.difficulty);
            $portChild.find('.miningPortDesc').text(portData.desc);
            $miningPortChildren.push($portChild);
          }
          $miningPorts.empty().append($miningPortChildren);
        }

        // updateTextClasses('exampleHost', poolHost);
        // updateTextClasses('examplePort', lastStats.config.ports[0].port.toString());

      }
    };

    // document.getElementById('easyminer_link').setAttribute('href', easyminerDownload);
    // document.getElementById('miningPoolHost').textContent = poolHost;

    var lastPortsJson = '';
    var $miningPorts = $('#miningPorts');
    var miningPortTemplate = $miningPorts.html();
    $miningPorts.empty();

  }

}
