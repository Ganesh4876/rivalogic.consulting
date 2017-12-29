import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeVaultComponent } from './knowledge-vault.component';

describe('KnowledgeVaultComponent', () => {
  let component: KnowledgeVaultComponent;
  let fixture: ComponentFixture<KnowledgeVaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeVaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeVaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
