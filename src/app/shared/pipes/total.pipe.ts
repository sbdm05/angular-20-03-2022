import { Pipe, PipeTransform } from '@angular/core';

// decorateur {{ prop | total}}
@Pipe({
  name: 'total',
})

export class TotalPipe implements PipeTransform {
  transform(val: number, coef: number, tva?: number): number {
    console.log('déclenché depuis le service');
    if (tva) return val * coef * (1 + tva / 100);
    return val * coef;
  }
}
