/* eslint-disable no-return-assign */
/* eslint-disable no-console */
import { Germany2022EnergyMixConfig } from '../src/energy/configs/Germany2022EnergyMixConfig';
import { DriveBehaviourManager } from '../src/managers/DriveBehaviourManager';
import { SoulMpi2_0, ESoul204 } from '../src/vehicles/brands/kia';

describe('Break-even point: Kia e-Soul 204 compared to Soul MPI 2.0', () => {
  DriveBehaviourManager.drivenKmPerMonth = 1600;

  const energyConfig = new Germany2022EnergyMixConfig();
  const vehicle = new ESoul204(energyConfig);
  const vehicle2 = new SoulMpi2_0();

  let breakEvenData: { months: number, km: number };

  test('expect calculation to be successful', () => {
    expect(() => breakEvenData = vehicle.getBreakEvenPointData(vehicle2)).not.toThrow();
  });

  test('expect months to be greater than 0', () => {
    expect(breakEvenData.months).toBeGreaterThan(0);
    console.log(`Break even will be reached in ${Math.ceil(breakEvenData.months)} months`);
  });

  test('expect km to be greater than 0', () => {
    expect(breakEvenData.km).toBeGreaterThan(0);
  });
});
