import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryActionPanelComponent } from './secondary-action-panel.component';

describe('SecondaryActionPanelComponent', () => {
  let component: SecondaryActionPanelComponent;
  let fixture: ComponentFixture<SecondaryActionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryActionPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryActionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
