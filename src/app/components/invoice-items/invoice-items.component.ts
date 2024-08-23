import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';
import { InvoiceRowItemComponent } from '../invoice-row-item/invoice-row-item.component';

@Component({
  selector: 'invoice-items',
  standalone: true,
  imports: [InvoiceRowItemComponent],
  templateUrl: './invoice-items.component.html',
})
export class InvoiceItemsComponent {
  @Output() isNewItem = new EventEmitter<boolean>();
  @Input() items: Item[] = [];
  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();

  onRemove(id: number) {
    this.removeEventEmitter.emit(id);
  }

  onNewItem() {
    this.isNewItem.emit(true);
  }
}
