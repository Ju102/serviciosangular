import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasApiComponent } from './personasapi-component';

describe('PersonasapiComponent', () => {
  let component: PersonasApiComponent;
  let fixture: ComponentFixture<PersonasApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonasApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonasApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
