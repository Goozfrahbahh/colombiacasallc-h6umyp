import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class DownloaderService {
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  getTextFile(filename: string) {
    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // Theres no need to pass as <string> type parameter to get()

    return this.http.get(filename, { responseType: 'text' }).pipe(
      tap(
        // log the result or error
        {
          next: (data) => this.log(filename, data),
          error: (error) => this.logError(filename, error),
        }
      )
    );
  }

  private log(filename: string, data: string) {
    const message = `DownloaderService downloaded "${filename}" and got "${data}".`;
    this.messageService.add(message);
  }

  private logError(filename: string, error: any) {
    const message = `DownLoaderServece failed to load "${filename}"; got error "${error.message}".`;
    console.error(message);
    this.messageService.add(message);
  }
}
