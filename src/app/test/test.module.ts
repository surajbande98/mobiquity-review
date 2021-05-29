import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from 'src/shared/http/http.service';
import { ConfigurationService } from 'src/shared/http/configuration.service';
import { LoginLoaderService } from 'src/shared/services/login-loader.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    ConfigurationService,
    LoginLoaderService
  ],
  exports: [
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class TestModule { }
