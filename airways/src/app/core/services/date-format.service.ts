import { Injectable } from '@angular/core';

export enum DateFormat {
  mmddyyyy = 'MM/DD/YYYY',
  ddmmyyyy = 'DD/MM/YYYY',
  yyyyddmm = 'YYYY/DD/MM',
  yyyymmdd = 'YYYY/MM/DD',
}

@Injectable({
  providedIn: 'root'
})
export class DateFormatService {
  mmddyyyy = 'MM/DD/YYYY';

  ddmmyyyy = 'DD/MM/YYYY';

  yyyyddmm = 'YYYY/DD/MM';

  yyyymmdd = 'YYYY/MM/DD';

  chechFormat(format: string): string {
    if (format === DateFormat.mmddyyyy) {
      return this.mmddyyyy;
    } else if (format === DateFormat.ddmmyyyy) {
      return this.ddmmyyyy;
    } else if (format === DateFormat.yyyyddmm) {
      return this.yyyyddmm;
    }
    return this.yyyymmdd;
  }
}
