import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


declare var $: any;

@Component({
  selector: 'app-pool-blocks',
  templateUrl: './pool-blocks.component.html',
  styleUrls: ['./pool-blocks.component.css']
})
export class PoolBlocksComponent implements OnInit {
  config;
  status;

  constructor(private dataService: DataService) {

  }

  parseBlock(lastStats, height, serializedBlock) {
    const parts = serializedBlock.split(':');
    const block: any = {
      height: parseInt(height, 10),
      hash: parts[0],
      time: parts[1],
      difficulty: parseInt(parts[2], 10),
      shares: parseInt(parts[3], 10),
      orphaned: parts[4],
      reward: parts[5]
    };

    const toGo = lastStats.config.depth - (lastStats.network.height - block.height);
    block.maturity = toGo < 1 ? '' : (toGo + ' to go');

    switch (block.orphaned) {
      case '0':
        block.status = 'unlocked';
        break;
      case '1':
        block.status = 'orphaned';
        break;
      default:
        block.status = 'pending';
        break;
    }

    return block;
  }

  formatLuck(lastStats, difficulty, shares) {
    let accurateShares;

    // accurateShares is only an approximation to reverse the calcualtions done in pool.js,
    // because the shares with their respective are not recorded in redis
    // Approximation assumes equal pool hashrate for the whole round
    // Could potentially be replaced by storing the sum of all job.difficulty in the redis db.

    if (lastStats.config.slushMiningEnabled) {
      accurateShares = shares / (1 / lastStats.config.blockTime * (
        lastStats.config.weight - lastStats.config.weight *
        Math.pow(
          Math.E,
          ((lastStats.config.blockTime * (-1)) / lastStats.config.weight)
        )
      )
      );
    } else {
      accurateShares = shares;
    }
    if (difficulty > accurateShares) {
      const percent = 100 - Math.round(accurateShares / difficulty * 100);
      return '<span class="luckGood">' + percent + '%</span>';
    } else {
      const percent = (100 - Math.round(difficulty / accurateShares * 100)) * -1;
      return '<span class="luckBad">' + percent + '%</span>';
    }
  }

  formatBlockLink(hash) {
    return '<a target="_blank" href="' + this.dataService.getBlockchainUrl(this.status, hash) + '">' + hash + '</a>';
  }

  getBlockRowElement(lastStats, block, jsonString) {
    const blockStatusClasses = {
      'pending': '',
      'unlocked': 'success',
      'orphaned': 'danger'
    };

    const row = document.createElement('tr');
    row.setAttribute('data-json', jsonString);
    row.setAttribute('data-height', block.height);
    row.setAttribute('id', 'blockRow' + block.height);
    row.setAttribute('title', block.status);
    row.className = blockStatusClasses[block.status];

    const columns =
      '<td>' + block.height + '</td>' +
      '<td>' + block.maturity + '</td>' +
      '<td>' + block.difficulty + '</td>' +
      '<td>' + this.formatBlockLink(block.hash) + '</td>' +
      '<td>' + this.dataService.formatDate(block.time) + '</td>' +
      '<td>' + this.formatLuck(this.status, block.difficulty, block.shares) + '</td>';

    row.innerHTML = columns;

    return row;
  }

  renderBlocks(lastStats, blocksResults) {

    const $blocksRows = $('#blocks_rows');

    for (let i = 0; i < blocksResults.length; i += 2) {

      const block = this.parseBlock(lastStats, blocksResults[i + 1], blocksResults[i]);

      const blockJson = JSON.stringify(block);

      const existingRow = document.getElementById('blockRow' + block.height);

      if (existingRow && existingRow.getAttribute('data-json') !== blockJson) {
        $(existingRow).replaceWith(this.getBlockRowElement(lastStats, block, blockJson));
      } else if (!existingRow) {

        const blockElement = this.getBlockRowElement(lastStats, block, blockJson);

        let inserted = false;
        const rows = $blocksRows.children().get();
        for (let f = 0; f < rows.length; f++) {
          const bHeight = parseInt(rows[f].getAttribute('data-height'), 10);
          if (bHeight < block.height) {
            inserted = true;
            $(rows[f]).before(blockElement);
            break;
          }
        }
        if (!inserted) {
          $blocksRows.append(blockElement);
        }
      }
    }
  }

  ngOnInit() {
    this.config = this.dataService.config;

    this.dataService.getStatus().subscribe(data => {
      if (Object.keys(data).length > 0) {
        this.status = data;
        this.renderBlocks(this.status, this.status.pool.blocks);
      }
    });
  }

  getMore() {
    this.dataService.getBlocks({ height: $('#blocks_rows').children().last().data('height') }).subscribe(data => {
      if (Object.keys(data).length > 0) {
        this.renderBlocks(this.status, data);
      }
    });
  }

}
