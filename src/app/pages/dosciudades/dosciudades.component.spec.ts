import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosciudadesComponent } from './dosciudades.component';

describe('DosciudadesComponent', () => {
  let component: DosciudadesComponent;
  let fixture: ComponentFixture<DosciudadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DosciudadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DosciudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
