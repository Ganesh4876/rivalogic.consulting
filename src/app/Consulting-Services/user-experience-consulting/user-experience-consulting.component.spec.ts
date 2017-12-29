import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExperienceConsultingComponent } from './user-experience-consulting.component';

describe('UserExperienceConsultingComponent', () => {
  let component: UserExperienceConsultingComponent;
  let fixture: ComponentFixture<UserExperienceConsultingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExperienceConsultingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExperienceConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
