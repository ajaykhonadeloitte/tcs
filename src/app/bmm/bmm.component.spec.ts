import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmmComponent } from './bmm.component';

describe('BmmComponent', () => {
  let component: BmmComponent;
  let fixture: ComponentFixture<BmmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
