import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortcutCardComponent } from './shortcut-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [
    ShortcutCardComponent
  ],
  exports: [
    ShortcutCardComponent
  ]
})
export class ShortcutCardModule {
}
