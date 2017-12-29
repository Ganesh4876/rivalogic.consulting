import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingConsultingComponent } from './branding-consulting.component';

describe('BrandingConsultingComponent', () => {
  let component: BrandingConsultingComponent;
  let fixture: ComponentFixture<BrandingConsultingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandingConsultingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandingConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
