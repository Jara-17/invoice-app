import { Component, Input } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'invoice-client',
  standalone: true,
  imports: [],
  templateUrl: './invoice-client.component.html',
})
export class InvoiceClientComponent {
  @Input() client: Client = new Client();
}
