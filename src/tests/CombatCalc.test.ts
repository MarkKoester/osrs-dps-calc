import { expect, test } from '@jest/globals';
import { calculate, getTestMonster, getTestPlayer } from '@/tests/utils/TestUtils';
import { ACCURACY_PRECISION, DPS_PRECISION } from '@/lib/constants';

test('Empty player against Abyssal demon', () => {
  const monster = getTestMonster('Abyssal demon', 'Standard');
  const player = getTestPlayer(monster);
  const result = calculate(monster, player);

  expect(result.maxHit).toBe(11);
  expect(result.dps).toBeCloseTo(0.667, DPS_PRECISION);
  expect(result.maxAttackRoll).toBe(7040);
  expect(result.npcDefRoll).toBe(12096);
  expect(result.accuracy * 100).toBeCloseTo(29.10, ACCURACY_PRECISION);
});
