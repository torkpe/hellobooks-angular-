import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventEmitterService {
  emitLogin = new EventEmitter();
  constructor() { }

  emitOnLogin() {
    this.emitLogin.emit(true);
  }
}
