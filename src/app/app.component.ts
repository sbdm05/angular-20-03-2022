import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = true;
  public typeInput = 'number';
  public nom = 'bonjour';

  public open: boolean = false;

  changeInput(): void {
    this.typeInput = 'color';
  }
  changeValueInput(e: Event) {
    console.log(e);

    // console.log(e.target.value);
  }

  public onClick() {
    console.log('cliqué');
    this.open = !this.open;
    console.log(this.open);
  }
}
