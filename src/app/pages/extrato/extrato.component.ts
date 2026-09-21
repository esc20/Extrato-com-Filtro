import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtratoService } from '../../core/services/extrato.service';
import { Transacao } from '../../core/models/transacao.model';

import { ListaTransacoesComponent } from '../../features/extrato/components/lista-transacoes/lista-transacoes.component';
import { FiltrosComponent } from '../../features/extrato/components/filtros/filtros.component';

@Component({
  selector: 'app-extrato',
  standalone: true,
  imports: [
    CommonModule, 
    ListaTransacoesComponent, 
    FiltrosComponent
  ],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.scss'
})
export class ExtratoComponent implements OnInit {
  private readonly _extratoService = inject(ExtratoService);
  
  
  transacoesOriginal = signal<Transacao[]>([]); 
  termoBusca = signal<string>(''); 
  tipoFiltro = signal<string>('TODOS');


  transacoesFiltradas = computed(() => {
    const lista = this.transacoesOriginal() || []; 
    const termo = (this.termoBusca() || '').toLowerCase().trim();
    const tipo = this.tipoFiltro() || 'TODOS';

    return lista.filter(t => {
      const descricao = t.descricao ? t.descricao.toLowerCase() : '';
      const bateTexto = descricao.includes(termo);
      const bateTipo = tipo === 'TODOS' || t.tipo === tipo;
      
      return bateTexto && bateTipo;
    });
  });

  ngOnInit(): void {
    this._extratoService.getTransacoes().subscribe({
      next: (dados: Transacao[]) => {
        this.transacoesOriginal.set(dados || []);
      },
      error: (err: any) => {
        console.error('Erro ao carregar transações:', err);
        this.transacoesOriginal.set([]); 
      }
    });
  }
}
