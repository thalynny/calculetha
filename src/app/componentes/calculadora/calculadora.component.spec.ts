import { FeriasService } from './../../servicos/ferias.service';

describe('FeriasService', () => {
  let service: FeriasService;

  beforeEach(() => {
    service = new FeriasService();
  });

  it('deve calcular corretamente sem abono', () => {
    service.salario.set(3000);
    service.diasFerias.set(30);
    service.abono.set(false);

    const resultado = service.valorFerias();
    expect(resultado.bruto).toBeCloseTo(4000);
    expect(resultado.liquido).toBeLessThan(resultado.bruto);
  });

  it('deve calcular corretamente com abono', () => {
    service.salario.set(3000);
    service.diasFerias.set(30);
    service.abono.set(true);

    const resultado = service.valorFerias();
    expect(resultado.bruto).toBeCloseTo(7000);
  });
});
