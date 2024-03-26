import { TestBed } from '@angular/core/testing';

import { TodoManageService } from './todo-manage.service';

describe('TodoManageService', () => {
  let service: TodoManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
