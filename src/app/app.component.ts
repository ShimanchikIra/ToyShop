import { Component } from '@angular/core';
import {LogService} from './log.service';
import {ConfigService} from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LogService, ConfigService]
})
export class AppComponent {
  constructor() { }

}
