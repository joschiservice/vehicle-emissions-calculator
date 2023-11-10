export interface IEnergySource {
  name: string;

  /**
     * Percent of total energy share
     */
  share: number;

  /**
     * CO2 emissions per kwh in gramm
     */
  emissionsPerKwh: number;
}
