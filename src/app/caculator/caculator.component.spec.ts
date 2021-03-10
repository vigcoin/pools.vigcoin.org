import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CaculatorComponent } from './caculator.component';

describe('CaculatorComponent', () => {
  let component: CaculatorComponent;
  let fixture: ComponentFixture<CaculatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CaculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
