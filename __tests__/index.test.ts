/* eslint-disable no-return-assign */
/* eslint-disable no-console */
import { Germany2022 } from '../src/energy/configs/Germany2022';
import { SoulMpi2_0, ESoul204 } from '../src/vehicles/brands/kia';

describe('Break-even point: Kia e-Soul 204 compared to Soul MPI 2.0', () => {
  const energyConfig = new Germany2022();
  const vehicle = new ESoul204(energyConfig);
  const vehicle2 = new SoulMpi2_0();

  let breakEvenKm: number;

  test('expect calculation to be successful', () => {
    expect(() => breakEvenKm = vehicle.getBreakEvenPointKm(vehicle2)).not.toThrow();
  });

  test('expect km to be greater than 0', () => {
    expect(breakEvenKm).toBeGreaterThan(0);
    console.log(`Break even will be reached in ${breakEvenKm} km`);
  });
});
