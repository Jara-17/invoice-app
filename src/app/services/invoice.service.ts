import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../db/invoice.data';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private invoice: Invoice = invoiceData;

  constructor() {}

  getInvoice(): Invoice {
    const total = this.getTotal();
    return { ...this.invoice, total };
  }

  remove(id: number) {
    this.invoice.items = this.invoice.items.filter((item) => item.id != id);
    const total = this.getTotal();

    return { ...this.invoice, total };
  }

  save(item: Item): Invoice {
    this.invoice.items = [... this.invoice.items, item];
    const total = this.getTotal();

    return { ...this.invoice, total };
  }

  getTotal(): number {
    return this.invoice.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}
