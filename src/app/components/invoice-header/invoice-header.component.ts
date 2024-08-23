import { Component, Input } from '@angular/core';

@Component({
  selector: 'invoice-header',
  standalone: true,
  imports: [],
  templateUrl: './invoice-header.component.html',
})
export class InvoiceHeaderComponent {
  @Input() invoiceId: number = 0;
  @Input() invoiceName: string = '';
}
