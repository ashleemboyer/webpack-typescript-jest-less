import formatDate from '../formatDate';

describe('formatDate', () => {
  it('formats correctly', () => {
    expect(formatDate('2020-12-31', 'MM-DD-YYYY')).toBe('12-31-2020');
  });
});
