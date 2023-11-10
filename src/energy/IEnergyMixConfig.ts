import { IEnergySource } from './IEnergySource';

export abstract class IEnergyMixConfig {
  public abstract energySources: IEnergySource[];

  /**
     * Calculates the CO2 emissions per kwh based on the config.
     * @returns gramm of CO2 per kwh
     */
  public getEmissionsPerKwh(): number {
    const emissionsPerSource = this.energySources.map((x) => x.emissionsPerKwh * (x.share / 100));
    return emissionsPerSource.reduce((prev, curr) => prev + curr);
  }
}
