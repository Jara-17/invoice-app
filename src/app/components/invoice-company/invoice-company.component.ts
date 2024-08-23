import { Component, Input } from '@angular/core';
import { Company } from '../../models/company';

@Component({
  selector: 'invoice-company',
  standalone: true,
  imports: [],
  templateUrl: './invoice-company.component.html',
})
export class InvoiceCompanyComponent {
  @Input() company: Company = {name: '', fiscalNumber: 0}
}
