import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOngsComponent } from './page-ongs.component';

describe('PageOngsComponent', () => {
  let component: PageOngsComponent;
  let fixture: ComponentFixture<PageOngsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOngsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOngsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
