import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaFuncionMultiple } from './plantilla-funcion-multiple';

describe('PlantillaFuncionMultiple', () => {
  let component: PlantillaFuncionMultiple;
  let fixture: ComponentFixture<PlantillaFuncionMultiple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantillaFuncionMultiple]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillaFuncionMultiple);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
