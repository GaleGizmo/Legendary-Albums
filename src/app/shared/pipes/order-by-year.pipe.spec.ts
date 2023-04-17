import { OrderByYearPipe } from './order-by-year.pipe';

describe('OrderByYearPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByYearPipe();
    expect(pipe).toBeTruthy();
  });
});
