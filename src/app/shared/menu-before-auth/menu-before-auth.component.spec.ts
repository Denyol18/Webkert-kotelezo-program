import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBeforeAuthComponent } from './menu-before-auth.component';

describe('MenuBeforeAuthComponent', () => {
  let component: MenuBeforeAuthComponent;
  let fixture: ComponentFixture<MenuBeforeAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBeforeAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBeforeAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
