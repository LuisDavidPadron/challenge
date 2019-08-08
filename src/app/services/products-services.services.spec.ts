import { TestBed } from '@angular/core/testing';

import { ProductsServicesServices } from './products-services.service';

describe('ProductsServicesServices', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsServicesServices = TestBed.get(ProductsServicesServices);
    expect(service).toBeTruthy();
  });
});
