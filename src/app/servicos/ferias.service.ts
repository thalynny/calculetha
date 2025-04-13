import { Injectable, computed, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FeriasService {
  salario = signal(0);
  diasFerias = signal(20); // Exemplo: tirou 20 dias
  abono = signal(false);

  valorFerias = computed(() => {
    const salario = this.salario();
    const diasF = this.diasFerias(); // dias de férias tirados
    const vendeUmTerco = this.abono();

    const diasNoMes = 30;
    const diasTrabalhados = diasNoMes - diasF;

    // Valor proporcional de férias
    const valorFeriasBase = (salario / diasNoMes) * diasF;
    const adicionalUmTerco = valorFeriasBase / 3;

    // Abono (venda de 1/3 das férias)
    const abonoValor = vendeUmTerco ? (salario / diasNoMes) * 10 : 0;

    // Dias trabalhados normalmente no mês
    const valorTrabalhado = (salario / diasNoMes) * diasTrabalhados;

    // Total bruto
    const bruto = valorFeriasBase + adicionalUmTerco + abonoValor + valorTrabalhado;

    // Descontos CLT (simulados)
    const inss = bruto * 0.08;
    const irrf = bruto * 0.075;

    const descontos = inss + irrf;
    const liquido = bruto - descontos;

    return {
      diasFerias: diasF,
      diasTrabalhados,
      valorFeriasBase,
      adicionalUmTerco,
      abonoValor,
      valorTrabalhado,
      bruto,
      descontos,
      liquido
    };
  });
}
