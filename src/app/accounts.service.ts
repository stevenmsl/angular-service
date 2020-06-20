import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';

/*
   Marking a class with @Injectable ensures 
   that the compiler will generate the necessary
   metadata to create the class's dependencies 
   when the class is injected.
*/

@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}
  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    this.loggingService.logStatusChange(status);
  }
  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
