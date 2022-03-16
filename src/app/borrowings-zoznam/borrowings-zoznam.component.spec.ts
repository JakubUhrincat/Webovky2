import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingsZoznamComponent } from './borrowings-zoznam.component';

describe('BorrowingsZoznamComponent', () => {
  let component: BorrowingsZoznamComponent;
  let fixture: ComponentFixture<BorrowingsZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowingsZoznamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowingsZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
