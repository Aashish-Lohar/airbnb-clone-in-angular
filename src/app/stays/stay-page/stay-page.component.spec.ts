import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayPageComponent } from './stay-page.component';

describe('StayPageComponent', () => {
  let component: StayPageComponent;
  let fixture: ComponentFixture<StayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StayPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
