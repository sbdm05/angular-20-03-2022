import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent {
  public form!: FormGroup;

  @Input() init!: Order;
  // déclarer une propriété disponible pour le parent
  @Output() submitted = new EventEmitter();

  public stateOrder = Object.values(StateOrder);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    console.log(this.init, 'objet complet du parent');
    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt],
      nbJours: [
        this.init.nbJours,
        [Validators.required, Validators.max(5)],
      ],
      tva: [this.init.tva],
      state: [this.init.state],
      typePresta: [
        this.init.typePresta,
        [Validators.required, Validators.minLength(5)],
      ],
      client: [
        this.init.client,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
        ],
      ],
      comment: [this.init.comment],
      id: [this.init.id],
    });
  }

  public onSubmit() {
    console.log('validé');
    // récupérer l'objet complet
    console.log(this.form.value);
    // envoyer cet objet à la bdd
    // dans le service, méthode post
    this.submitted.emit(this.form.value);
  }
}
