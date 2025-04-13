import { Component } from '@angular/core';
import { FeriasService } from './../../servicos/ferias.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculadora.component.html',
})
export class CalculadoraComponent {
  constructor(public ferias: FeriasService) {}

  // Atualiza o salário digitado
  atualizarSalario(valor: string): void {
    const salario = parseFloat(valor);
    if (!isNaN(salario)) {
      this.ferias.salario.set(salario);
    }
  }

  // Atualiza os dias de férias tirados
  atualizarDias(valor: string): void {
    const dias = parseInt(valor, 10);
    if (!isNaN(dias) && dias >= 0 && dias <= 30) {
      this.ferias.diasFerias.set(dias);
    }
  }

  // Marca se há abono (venda de 1/3 das férias)
  atualizarAbono(valor: boolean): void {
    this.ferias.abono.set(valor);
  }
}
