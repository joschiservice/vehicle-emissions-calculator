import { IVehicle } from './IVehicle';

/**
 * Internal combustion engine vehicle
 */
export abstract class IceVehicle extends IVehicle {
  /**
     * Fuel consumption in litres per 100 kilometres
     */
  public abstract fuelConsumption: number;

  public abstract emissionsPerKm: number;

  getEmissionsPerKm(): number {
    return this.emissionsPerKm;
  }

  // eslint-disable-next-line class-methods-use-this
  getProductionEmissions(): number {
    return 0;
  }
}
