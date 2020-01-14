import { Component, OnInit } from '@angular/core';
import {Config} from '../../config';
import {ConfigService} from '../config.service';
import {LogService} from '../log.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [LogService]
})
export class MainComponent implements OnInit {

  config: Config;
  status: number;
  // headers: string[];

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getConfig().subscribe(resp => {
      // display its headers
      // const keys = resp.headers.keys();
      // this.headers = keys.map(key =>
      //   `${key}: ${resp.headers.get(key)}`);
      this.config = { ... resp.body };
      this.status = resp.status;
    });
    LogService.write('Get response');
  }
}
