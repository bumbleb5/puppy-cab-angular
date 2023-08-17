import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortcutCardComponent } from './shortcut-card.component';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { PlanTransportInnardsComponent } from './innards/plan-transport-innards/plan-transport-innards.component';
import { ManageRailroadInnardsComponent } from './innards/manage-railroad-innards/manage-railroad-innards.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule
  ],
  declarations: [
    ShortcutCardComponent,
    PlanTransportInnardsComponent,
    ManageRailroadInnardsComponent
  ],
  exports: [
    ShortcutCardComponent,
    PlanTransportInnardsComponent
  ]
})
export class ShortcutCardModule {
}
