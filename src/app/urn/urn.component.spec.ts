import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrnComponent } from './urn.component';

describe('UrnComponent', () => {
  let component: UrnComponent;
  let fixture: ComponentFixture<UrnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
