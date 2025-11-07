import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasStandaloneComponent } from './personas-standalone-component';

describe('PersonasStandaloneComponent', () => {
  let component: PersonasStandaloneComponent;
  let fixture: ComponentFixture<PersonasStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonasStandaloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonasStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
