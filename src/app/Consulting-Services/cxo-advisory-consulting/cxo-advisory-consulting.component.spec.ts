import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxoAdvisoryConsultingComponent } from './cxo-advisory-consulting.component';

describe('CxoAdvisoryConsultingComponent', () => {
  let component: CxoAdvisoryConsultingComponent;
  let fixture: ComponentFixture<CxoAdvisoryConsultingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxoAdvisoryConsultingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxoAdvisoryConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
