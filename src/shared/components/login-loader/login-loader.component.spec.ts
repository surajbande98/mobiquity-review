import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLoaderComponent } from './login-loader.component';

describe('LoginLoaderComponent', () => {
  let component: LoginLoaderComponent;
  let fixture: ComponentFixture<LoginLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('-------------should create--------------------', () => {
    expect(component).toBeTruthy();
  });
});
