import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
// Material Modules
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
// Components
import { HomeComponent } from './home/home.component';
import { ShortcutCardComponent } from './shortcut-card/shortcut-card.component'

@NgModule({
    declarations: [HomeComponent, ShortcutCardComponent],
    imports: [CommonModule, MatButtonModule, MatCardModule, MatTabsModule],
    exports: [HomeComponent],
})
export class HomeModule {}
