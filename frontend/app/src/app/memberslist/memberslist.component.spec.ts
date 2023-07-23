import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberslistComponent } from './memberslist.component';

describe('MemberslistComponent', () => {
  let component: MemberslistComponent;
  let fixture: ComponentFixture<MemberslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
