import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDirvenFormComponent } from './template-dirven-form.component';

describe('TemplateDirvenFormComponent', () => {
  let component: TemplateDirvenFormComponent;
  let fixture: ComponentFixture<TemplateDirvenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDirvenFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDirvenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
