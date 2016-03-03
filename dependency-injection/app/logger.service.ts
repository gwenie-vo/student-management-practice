import {Component} from 'angular2/core';
import {Injectable} from 'angular2/core';
import {LoggerMessage} from './logger-message';

@Injectable()
export class LoggerService {
  // return;
  getLogger(){
    return "This is the Logger Message!! Just for testing!";
  }
}
