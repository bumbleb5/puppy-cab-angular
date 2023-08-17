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
import { VolunteerLookupComponent } from './innards/manage-railroad-innards/volunteer-lookup/volunteer-lookup.component';
import { QuickAddComponent } from './innards/manage-railroad-innards/quick-add/quick-add.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule,
    MatTabsModule,
    MatCheckboxModule
  ],
  declarations: [
    ShortcutCardComponent,
    PlanTransportInnardsComponent,
    ManageRailroadInnardsComponent,
    VolunteerLookupComponent,
    QuickAddComponent
  ],
  exports: [
    ShortcutCardComponent,
    PlanTransportInnardsComponent,
    ManageRailroadInnardsComponent
  ]
})
export class ShortcutCardModule {
}
