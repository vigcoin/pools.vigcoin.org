import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserslistComponent } from './userslist.component';

describe('UserslistComponent', () => {
  let component: UserslistComponent;
  let fixture: ComponentFixture<UserslistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
