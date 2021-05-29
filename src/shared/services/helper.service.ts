import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  getTimeFromTimestamp(timestamp: number): string {
    // convert to milliseconds and 
    // then create a new Date object
    const dateObj = new Date(timestamp * 1000);
    const utcString = dateObj.toUTCString();

    const time = utcString.slice(-11, -4);

    return time;
  }

  /**
   * This is the moveScrollToElement function
   * @param elemId string
   * @returns void
   */
  moveScrollToElement(elemId: string): void {
    setTimeout(() => {
      let elementToScroll = document.getElementById(elemId);
      if (elementToScroll) {
        elementToScroll.scrollIntoView();
      }
    }, 0);
  }
  
}
