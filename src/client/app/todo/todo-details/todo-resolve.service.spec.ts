/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoResolveService } from './todo-resolve.service';

describe('Service: TodoResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoResolveService]
    });
  });

  it('should ...', inject([TodoResolveService], (service: TodoResolveService) => {
    expect(service).toBeTruthy();
  }));
});
