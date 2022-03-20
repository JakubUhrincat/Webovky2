import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksFormularComponent } from './books-formular.component';

describe('BooksFormularComponent', () => {
  let component: BooksFormularComponent;
  let fixture: ComponentFixture<BooksFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksFormularComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
