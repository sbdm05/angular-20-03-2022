import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [IconCloseComponent, IconNavComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [IconCloseComponent, IconNavComponent],
})
export class IconsModule {}
