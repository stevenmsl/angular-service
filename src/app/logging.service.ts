export class LoggingService {
  logStatusChange(status: string) {
    var msg = `A server status changed, new status:${status}`;
    console.log(msg);
  }
}
