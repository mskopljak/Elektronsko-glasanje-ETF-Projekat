import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionlistComponent } from './electionlist.component';

describe('ElectionlistComponent', () => {
  let component: ElectionlistComponent;
  let fixture: ComponentFixture<ElectionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
