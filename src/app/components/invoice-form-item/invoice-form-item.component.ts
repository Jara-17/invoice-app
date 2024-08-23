import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'invoice-form-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './invoice-form-item.component.html',
})
export class InvoiceFormItemComponent {
  @Input() isHidenForm = false;
  @Output() addItemEventEmitter = new EventEmitter<Item>();
  @Output() formVisibilityEmitter = new EventEmitter<boolean>();
  private counterId = 11;

  item: any = {
    product: '',
    price: '',
    quantity: '',
  };

  onSumit(): void {
    this.addItemEventEmitter.emit({ id: this.counterId, ...this.item });
    this.counterId++;

    this.item = {
      product: '',
      price: '',
      quantity: '',
    };

    this.isHidenForm = false;
    this.formVisibilityEmitter.emit(false);
  }
}
