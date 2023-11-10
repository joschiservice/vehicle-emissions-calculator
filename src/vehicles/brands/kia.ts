/* eslint-disable max-classes-per-file */
import { BatteryType } from '../../enums/BatteryType';
import { BevVehicle } from '../BevVehicle';
import { IceVehicle } from '../IceVehicle';

/**
 * Kia e-Soul SK3 204 PS
 *
 * - Source consumption data: https://de.wikipedia.org/wiki/Kia_Soul#3._Generation_(seit_2019)
 */
class ESoul204 extends BevVehicle {
  public hvBatteryType: BatteryType = BatteryType.LithiumIon;

  public hvBatteryCapacity: number = 64;

  public consumptionPerKm: number = 15.7 / 100;
}

/**
 * Kia Soul 2.0 MPI
 * - Source for consumption & emissions: https://www.fueleconomy.gov/feg/Find.do?action=sbs&id=43928&#tab2
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class SoulMpi2_0 extends IceVehicle {
  public fuelConsumption: number = 7.84;

  public emissionsPerKm: number = 178.334;
}

export {
  ESoul204,
  SoulMpi2_0,
};
