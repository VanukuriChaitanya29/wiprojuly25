import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fruitcomponent } from './fruitcomponent';

describe('Fruitcomponent', () => {
  let component: Fruitcomponent;
  let fixture: ComponentFixture<Fruitcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fruitcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fruitcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
