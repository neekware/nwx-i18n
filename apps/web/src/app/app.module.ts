import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CfgModule } from '@nwx/cfg';
import { LogModule } from '@nwx/logger';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { I18nModule } from 'pkgs/i18n';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'lazy',
    loadChildren: './lazy/lazy.module#LazyModule'
  }
];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CfgModule.forRoot(environment),
    LogModule,
    I18nModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
