import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { SharedModule } from './modules/shared/shared-module';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule,SharedModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
