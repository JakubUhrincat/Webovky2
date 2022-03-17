import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksZoznamComponent } from './books-zoznam.component';

describe('BooksZoznamComponent', () => {
  let component: BooksZoznamComponent;
  let fixture: ComponentFixture<BooksZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksZoznamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
