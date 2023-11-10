import { IEnergyMixConfig } from '../energy/IEnergyMixConfig';
import { BatteryType } from '../enums/BatteryType';
import { IVehicle } from './IVehicle';

/**
 * Production emission of a lithium-ion battery in CO2 grams per kwh
 *
 * Source: https://www.mckinsey.com/industries/automotive-and-assembly/our-insights/the-race-to-decarbonize-electric-vehicle-batteries
 */
const LITHIUM_ION_CO2_PER_KWH = 100000;

/**
 * Battery-electric vehicle
 */
export abstract class BevVehicle extends IVehicle {
  /**
   * @param energyMixConfig The energy mix used for charging the vehicle
   * @param odometer State of the odometer in km
   */
  constructor(energyMixConfig: IEnergyMixConfig, odometer: number = 0) {
    super();

    this.odometer = odometer;
    this.energyMixConfig = energyMixConfig;
  }

  private energyMixConfig: IEnergyMixConfig;

  /**
     * Initial capacity of the high-voltage battery in kwh
     */
  public abstract hvBatteryCapacity: number;

  /**
     * Energy consumption per km in kwh
     */
  public abstract consumptionPerKm: number;

  /**
     * Type of the high-voltage battery
     */
  public abstract hvBatteryType: BatteryType;

  public getProductionEmissions(): number {
    let batteryProductionEmissions = 0;
    switch (this.hvBatteryType) {
      case BatteryType.LithiumIon:
        batteryProductionEmissions = LITHIUM_ION_CO2_PER_KWH * this.hvBatteryCapacity;
        break;

      default:
        break;
    }

    return batteryProductionEmissions;
  }

  public getEmissionsPerKm(): number {
    return this.energyMixConfig.getEmissionsPerKwh() * this.consumptionPerKm;
  }
}
