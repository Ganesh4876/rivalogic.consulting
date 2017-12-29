import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpConsultingComponent } from './erp-consulting.component';

describe('ErpConsultingComponent', () => {
  let component: ErpConsultingComponent;
  let fixture: ComponentFixture<ErpConsultingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErpConsultingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErpConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
