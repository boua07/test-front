import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireDossierComponent } from './formulaire-dossier.component';

describe('FormulaireDossierComponent', () => {
  let component: FormulaireDossierComponent;
  let fixture: ComponentFixture<FormulaireDossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireDossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
