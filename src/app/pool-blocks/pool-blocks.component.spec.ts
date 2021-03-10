import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PoolBlocksComponent } from './pool-blocks.component';

describe('PoolBlocksComponent', () => {
  let component: PoolBlocksComponent;
  let fixture: ComponentFixture<PoolBlocksComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
