import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { ShortcutCardModule } from './shortcut-card/shortcut-card.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    ShortcutCardModule
  ],
  declarations: [
    HomePageComponent
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule {
}
