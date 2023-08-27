import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Family2treeComponent } from './family2tree.component';

describe('Family2treeComponent', () => {
  let component: Family2treeComponent;
  let fixture: ComponentFixture<Family2treeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Family2treeComponent]
    });
    fixture = TestBed.createComponent(Family2treeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
