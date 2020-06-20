import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  /* 
     - AccountsService instance provided here will be a 
       different one from the one defined in app.component
     - As a result, accounts added using this instance will not
       be visible to app component  
  */
  providers: [
    /* LoggingService, AccountsService */
  ],
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  // DI
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {
    this.accountsService.statusUpdated.subscribe((status: string) =>
      alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // instead of emitting events use service to pass on the data
    // to other components
    this.accountsService.addAccount(accountName, accountStatus);
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus,
    // });
    //this.loggingService.logStatusChange(accountStatus);
  }
}
