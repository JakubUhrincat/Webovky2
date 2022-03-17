import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingsFormularComponent } from './borrowings-formular.component';

describe('BorrowingsFormularComponent', () => {
  let component: BorrowingsFormularComponent;
  let fixture: ComponentFixture<BorrowingsFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowingsFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowingsFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
