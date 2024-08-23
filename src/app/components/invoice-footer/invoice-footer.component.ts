import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'invoice-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice-footer.component.html',
})
export class InvoiceFooterComponent {
  @Input() invoiceTotal: number = 0;
}
