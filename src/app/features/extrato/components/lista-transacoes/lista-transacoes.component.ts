import { Component, input, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; 
import { Transacao } from '../../../../core/models/transacao.model';

@Component({
  selector: 'app-lista-transacoes',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, DatePipe],
  templateUrl: './lista-transacoes.component.html',
  styleUrl: './lista-transacoes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaTransacoesComponent {
  transacoes = input<Transacao[]>([]);
  private sanitizer = inject(DomSanitizer);

  // Mapeamento de ícones minimalistas (Estilo Linha/Vector)
  getIcon(categoria: string): SafeHtml {
    const icons: { [key: string]: string } = {
      'PIX': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M7 7l5 5-5 5M13 7l5 5-5 5"/></svg>`,
      'CARTAO': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
      'BOLETO': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 7V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3"/><path d="M9 15h6"/><path d="M9 19h6"/></svg>`,
      'TRANSFERENCIA': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 1l4 4-4 4"/><path d="M3 5h18"/><path d="M7 23l-4-4 4-4"/><path d="M21 19H3"/></svg>`
    };

    const iconSvg = icons[categoria] || icons['PIX'];
    return this.sanitizer.bypassSecurityTrustHtml(iconSvg);
  }
}
