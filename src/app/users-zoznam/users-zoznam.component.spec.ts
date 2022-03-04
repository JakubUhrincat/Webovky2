import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersZoznamComponent } from './users-zoznam.component';

describe('UsersZoznamComponent', () => {
  let component: UsersZoznamComponent;
  let fixture: ComponentFixture<UsersZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersZoznamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
