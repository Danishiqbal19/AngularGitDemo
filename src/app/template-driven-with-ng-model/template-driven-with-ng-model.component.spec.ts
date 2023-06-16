import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenWithNgModelComponent } from './template-driven-with-ng-model.component';

describe('TemplateDrivenWithNgModelComponent', () => {
  let component: TemplateDrivenWithNgModelComponent;
  let fixture: ComponentFixture<TemplateDrivenWithNgModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenWithNgModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenWithNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
