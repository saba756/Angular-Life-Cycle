import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildDisplayComponent } from './content-child-display.component';

describe('ContentChildDisplayComponent', () => {
  let component: ContentChildDisplayComponent;
  let fixture: ComponentFixture<ContentChildDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentChildDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentChildDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
