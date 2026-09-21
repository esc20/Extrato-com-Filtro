import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-resumo-saldo',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './resumo-saldo.component.html',
  styleUrl: './resumo-saldo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumoSaldoComponent {
  saldo = input<number>(0);
  entradas = input<number>(0);
  saidas = input<number>(0);
}
