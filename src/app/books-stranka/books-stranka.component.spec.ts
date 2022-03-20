import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksStrankaComponent } from './books-stranka.component';

describe('BooksStrankaComponent', () => {
  let component: BooksStrankaComponent;
  let fixture: ComponentFixture<BooksStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksStrankaComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
