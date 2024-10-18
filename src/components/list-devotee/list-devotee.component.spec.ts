import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDevoteeComponent } from './list-devotee.component';

describe('ListDevoteeComponent', () => {
  let component: ListDevoteeComponent;
  let fixture: ComponentFixture<ListDevoteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDevoteeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListDevoteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
