import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';
import { I18nSharedModule } from 'pkgs/i18n';

export const lazyRoutes: Routes = [
  {
    path: '',
    redirectTo: 'lazy',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [{ path: '', component: LazyComponent }]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(lazyRoutes), I18nSharedModule],
  declarations: [LazyComponent]
})
export class LazyModule {}
