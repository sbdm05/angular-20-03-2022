import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent implements OnInit{
  @Input() label!: string;
  @Input() styleBtn!: string;
  @Input() route!: string;

  constructor() {
    console.log(this.label, 'depuis constructor'); // ?? undefined
  }

  // déclenchée une seule fois
  ngOnInit() {
    console.log(this.label, 'depuis oninit'); // ?? undefined
  }

  // déclenchée plusieurs fois
  ngOnChanges() {
    console.log(this.label, 'depuis onChanges'); // ?? undefined
  }
}
