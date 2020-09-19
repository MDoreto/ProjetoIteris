import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEmpressComponent } from './card-empress.component';

describe('CardEmpressComponent', () => {
  let component: CardEmpressComponent;
  let fixture: ComponentFixture<CardEmpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEmpressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEmpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
