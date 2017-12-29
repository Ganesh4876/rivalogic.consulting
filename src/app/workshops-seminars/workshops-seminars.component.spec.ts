import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopsSeminarsComponent } from './workshops-seminars.component';

describe('WorkshopsSeminarsComponent', () => {
  let component: WorkshopsSeminarsComponent;
  let fixture: ComponentFixture<WorkshopsSeminarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopsSeminarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopsSeminarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
