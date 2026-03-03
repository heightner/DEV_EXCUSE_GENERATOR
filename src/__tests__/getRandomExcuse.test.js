import { describe, it, expect, vi, afterEach } from 'vitest';
import data from '../data/excuses.json' with { type: 'json' };
import getRandomExcuse from '../utils/getRandomExcuse';

describe('getRandomExcuse', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns an excuse from the configured data list', () => {
    const result = getRandomExcuse();
    expect(data.excuses).toContain(result);
  });

  it('uses Math.random to select the expected excuse index', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);

    const result = getRandomExcuse();

    expect(result).toBe(data.excuses[0]);
  });
});
