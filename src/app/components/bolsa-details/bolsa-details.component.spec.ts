import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsaDetailsComponent } from './bolsa-details.component';

describe('BolsaDetailsComponent', () => {
  let component: BolsaDetailsComponent;
  let fixture: ComponentFixture<BolsaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolsaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolsaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
