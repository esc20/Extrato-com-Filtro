import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoSaldoComponent } from './resumo-saldo.component';

describe('ResumoSaldoComponent', () => {
  let component: ResumoSaldoComponent;
  let fixture: ComponentFixture<ResumoSaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumoSaldoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumoSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
