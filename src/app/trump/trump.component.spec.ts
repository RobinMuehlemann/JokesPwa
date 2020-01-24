import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrumpComponent } from './trump.component';

describe('TrumpComponent', () => {
  let component: TrumpComponent;
  let fixture: ComponentFixture<TrumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
