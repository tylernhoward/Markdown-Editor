/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ValueUpdaterService } from './value-updater.service';

describe('Service: ValueUpdater', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValueUpdaterService]
    });
  });

  it('should ...', inject([ValueUpdaterService], (service: ValueUpdaterService) => {
    expect(service).toBeTruthy();
  }));
});