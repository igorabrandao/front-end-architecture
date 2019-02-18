import { Injectable } from '@angular/core';

@Injectable()
export class AppSettings {
  /**
   * Define the APP name
   */
  public APP_NAME: string = 'Front-end architecture';

  /**
   * Define the APP version
   */
  public APP_VERSION: string = '0.0.1';

  /**
   * Define the APP last update
   */
  public APP_LAST_UPDATE: string = '17/02/2019';

  /**
   * Define the API URL
   * 
   * development: '<URL_HERE>'
   * production: '<URL_HERE>'
   * sandbox: '<URL_HERE>'
   */
  public API_URL: string = '<URL_HERE>';
}