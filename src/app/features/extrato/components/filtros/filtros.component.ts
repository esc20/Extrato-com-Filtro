import { Component, output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-filtros',
  standalone: true,
  templateUrl: './filtros.component.html',
  styleUrl: './filtros.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltrosComponent {
  aoMudarBusca = output<string>();
  aoMudarTipo = output<string>();

  onInput(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    this.aoMudarBusca.emit(valor);
  }

  onSelect(event: Event) {
    const valor = (event.target as HTMLSelectElement).value;
    this.aoMudarTipo.emit(valor);
  }
}
