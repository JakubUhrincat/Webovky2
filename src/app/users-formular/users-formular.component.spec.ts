import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFormularComponent } from './users-formular.component';

describe('UsersFormularComponent', () => {
  let component: UsersFormularComponent;
  let fixture: ComponentFixture<UsersFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
