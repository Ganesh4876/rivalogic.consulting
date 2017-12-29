import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupConsultingComponent } from './startup-consulting.component';

describe('StartupConsultingComponent', () => {
  let component: StartupConsultingComponent;
  let fixture: ComponentFixture<StartupConsultingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupConsultingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
