import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEmpressComponent } from './page-empress.component';

describe('PageEmpressComponent', () => {
  let component: PageEmpressComponent;
  let fixture: ComponentFixture<PageEmpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEmpressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEmpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
