import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersStrankaComponent } from './users-stranka.component';

describe('UsersStrankaComponent', () => {
  let component: UsersStrankaComponent;
  let fixture: ComponentFixture<UsersStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
