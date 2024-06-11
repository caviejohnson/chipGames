import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhichIsBiggerComponent } from './which-is-bigger.component';

describe('WhichIsBiggerComponent', () => {
  let component: WhichIsBiggerComponent;
  let fixture: ComponentFixture<WhichIsBiggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhichIsBiggerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhichIsBiggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
