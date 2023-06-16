import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvtentComponent } from './evtent.component';

describe('EvtentComponent', () => {
  let component: EvtentComponent;
  let fixture: ComponentFixture<EvtentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvtentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvtentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
