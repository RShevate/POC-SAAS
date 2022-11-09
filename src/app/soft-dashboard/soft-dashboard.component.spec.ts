import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftDashboardComponent } from './soft-dashboard.component';

describe('SoftDashboardComponent', () => {
  let component: SoftDashboardComponent;
  let fixture: ComponentFixture<SoftDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
