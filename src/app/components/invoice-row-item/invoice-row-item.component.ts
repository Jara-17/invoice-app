import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'tr[invoice-row-item]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice-row-item.component.html',
})
export class InvoiceRowItemComponent {
  @Input() item!: Item;
  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();

  onRemove(id: number) {
    this.removeEventEmitter.emit(id);
  }
}
