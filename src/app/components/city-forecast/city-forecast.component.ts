import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherDataService } from 'src/app/services/weather-data.service';

import { map, without } from 'lodash';
import { Subscription } from 'rxjs';
import { LoginLoaderService } from 'src/shared/services/login-loader.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HelperService } from 'src/shared/services/helper.service';

@Component({
  selector: 'city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.less']
})
export class CityForecastComponent implements OnInit, OnDestroy {

  foreCastData: any = [];

  getCityDataSubscription: Subscription;

  city: string;

  constructor(
    private route: ActivatedRoute,
    private dataService: WeatherDataService,
    private loader: LoginLoaderService,
    private helper: HelperService
  ) { }

  ngOnInit(): void {
    let city = '';

    // Subscibe to router params
    this.route.params.subscribe(params => {
      city = params['name'];
      this.getForecast(city);
    });

    if (!city) {
      city = window.location.pathname.split("/")[2];
      this.getForecast(city);
    }
  }

  /** This is the getForecast function
* @param city string
* @returns 
**/
  getForecast(city: string) {
    this.loader.show();

    this.getCityDataSubscription = this.dataService.getCityForecast(city)
      .subscribe(data => {
        this.loader.hide();

        const { list } = data;

        const finalData = map(list, (city) => {
          if (city.dt_txt.includes('9:00:00')) return city;
        });

        // Remove undefines from the array
        this.foreCastData = without(finalData, undefined);

        this.helper.moveScrollToElement('ForecastInDays');
      },
        (error: HttpErrorResponse) => {
          this.loader.hide();
          console.log(error);
        });
  }

  /** This is the ngOnDestroy function
* @param 
* @returns 
**/
  ngOnDestroy() {
    if(this.getCityDataSubscription) this.getCityDataSubscription.unsubscribe();
  }

  /** This is the trackById function
* @param  index number
 * @param  el any
* @returns number
**/
  trackById(index: number, el: any): number {
    return el.id;
  }

}
