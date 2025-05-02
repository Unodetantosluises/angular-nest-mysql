import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatPmiComponent } from './cat-pmi.component';

describe('CatPmiComponent', () => {
  let component: CatPmiComponent;
  let fixture: ComponentFixture<CatPmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatPmiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatPmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
