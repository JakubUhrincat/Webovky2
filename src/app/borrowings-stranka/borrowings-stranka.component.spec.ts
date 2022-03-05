import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingsStrankaComponent } from './borrowings-stranka.component';

describe('BorrowingsStrankaComponent', () => {
  let component: BorrowingsStrankaComponent;
  let fixture: ComponentFixture<BorrowingsStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowingsStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowingsStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
