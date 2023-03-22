import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';
import { TotalPipe } from './pipes/total.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BtnComponent, TotalPipe],
  imports: [CommonModule, RouterModule],
  exports: [BtnComponent, TotalPipe],
})
export class SharedModule {}
