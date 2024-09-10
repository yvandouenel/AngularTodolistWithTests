import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpTaskComponent } from './form-up-task.component';

describe('FormUpTaskComponent', () => {
  let component: FormUpTaskComponent;
  let fixture: ComponentFixture<FormUpTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormUpTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormUpTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
