import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighratedComponent } from './highrated.component';

describe('HighratedComponent', () => {
  let component: HighratedComponent;
  let fixture: ComponentFixture<HighratedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighratedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
