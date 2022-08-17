/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UiLoadingIconComponent } from './ui-loading-icon.component';

describe('UiLoadingIconComponent', () => {
  let component: UiLoadingIconComponent;
  let fixture: ComponentFixture<UiLoadingIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiLoadingIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiLoadingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
