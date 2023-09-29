import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableScoresComponent } from './table-scores.component';

describe('TableScoresComponent', () => {
  let component: TableScoresComponent;
  let fixture: ComponentFixture<TableScoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableScoresComponent]
    });
    fixture = TestBed.createComponent(TableScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
