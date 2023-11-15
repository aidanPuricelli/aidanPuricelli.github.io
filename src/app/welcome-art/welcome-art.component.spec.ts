import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeArtComponent } from './welcome-art.component';

describe('WelcomeArtComponent', () => {
  let component: WelcomeArtComponent;
  let fixture: ComponentFixture<WelcomeArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomeArtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcomeArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
