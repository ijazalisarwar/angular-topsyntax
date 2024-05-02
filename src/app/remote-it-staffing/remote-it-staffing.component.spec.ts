import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteItStaffingComponent } from './remote-it-staffing.component';

describe('RemoteItStaffingComponent', () => {
  let component: RemoteItStaffingComponent;
  let fixture: ComponentFixture<RemoteItStaffingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteItStaffingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteItStaffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
