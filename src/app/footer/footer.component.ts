import { Component, OnInit } from '@angular/core';
import {Config} from '../../config';
import {ConfigService} from '../config.service';
import {LogService} from '../log.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  config: Config;
  status: number;
  headers: string[];

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.getConfig();
    LogService.write('Config has been got', this.status);
  }
  getConfig() {
    this.configService.getConfig().subscribe(resp => {
      const keys = resp.headers.keys();
      this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);
      this.config = { ... resp.body };
    });
  }

}
