import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloaderLibComponent } from './preloader-lib.component';

describe('PreloaderLibComponent', () => {
  let component: PreloaderLibComponent;
  let fixture: ComponentFixture<PreloaderLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreloaderLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreloaderLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
