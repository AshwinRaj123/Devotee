import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDevoteeComponent } from './create-devotee.component';

describe('CreateDevoteeComponent', () => {
  let component: CreateDevoteeComponent;
  let fixture: ComponentFixture<CreateDevoteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDevoteeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateDevoteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
