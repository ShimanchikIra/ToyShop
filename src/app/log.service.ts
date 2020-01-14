import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }
  static write(logMessage: string): void {
    console.log(logMessage);
  }
}
