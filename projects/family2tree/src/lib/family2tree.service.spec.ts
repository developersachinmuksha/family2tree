import { TestBed } from '@angular/core/testing';

import { Family2treeService } from './family2tree.service';

describe('Family2treeService', () => {
  let service: Family2treeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Family2treeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
