import { Component, inject, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { InvoiceHeaderComponent } from '../invoice-header/invoice-header.component';
import { InvoiceFooterComponent } from '../invoice-footer/invoice-footer.component';
import { InvoiceClientComponent } from '../invoice-client/invoice-client.component';
import { InvoiceCompanyComponent } from '../invoice-company/invoice-company.component';
import { InvoiceItemsComponent } from '../invoice-items/invoice-items.component';
import { InvoiceFormItemComponent } from '../invoice-form-item/invoice-form-item.component';
import { Item } from '../../models/item';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    InvoiceHeaderComponent,
    InvoiceFooterComponent,
    InvoiceClientComponent,
    InvoiceCompanyComponent,
    InvoiceItemsComponent,
    InvoiceFormItemComponent,
  ],
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent implements OnInit {
  private invoiceService: InvoiceService = inject(InvoiceService);
  invoice!: Invoice;
  isNewItem = false;

  ngOnInit(): void {
    this.invoice = this.invoiceService.getInvoice();
  }

  removeItem(id: number) {
    this.invoice = this.invoiceService.remove(id);
  }

  addItem(item: Item) {
    this.invoice = this.invoiceService.save(item);
    this.isNewItem = false;
  };

  onNewItem(showForm: boolean) {
    this.isNewItem = showForm;
  }
}
