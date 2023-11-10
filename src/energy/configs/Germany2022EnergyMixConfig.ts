import { IEnergyMixConfig } from '../IEnergyMixConfig';
import { IEnergySource } from '../IEnergySource';

/**
 * 2022 energy mix for Germany
 * - Source emissions: https://www.tech-for-future.de/co2-kwh-strom/
 * - Source energy shares: https://www.destatis.de/DE/Presse/Pressemitteilungen/2023/03/PD23_090_43312.html
 */
export class Germany2022EnergyMixConfig extends IEnergyMixConfig {
  public energySources: IEnergySource[] = [
    {
      name: 'coal',
      share: 33.3,
      emissionsPerKwh: 925,
    },
    {
      name: 'nuclear',
      share: 6.4,
      emissionsPerKwh: 12,
    },
    {
      name: 'natural gas',
      share: 11.4,
      emissionsPerKwh: 515,
    },
    {
      name: 'other non-renewable',
      share: 2.6,
      emissionsPerKwh: 500, // estimated
    },
    {
      name: 'wind',
      share: 24.1,
      emissionsPerKwh: 86,
    },
    {
      name: 'biogas',
      share: 5.8,
      emissionsPerKwh: 230,
    },
    {
      name: 'solar',
      share: 10.6,
      emissionsPerKwh: 143,
    },
    {
      name: 'water',
      share: 3.2,
      emissionsPerKwh: 24,
    },
    {
      name: 'other renewable',
      share: 2.6,
      emissionsPerKwh: 120, // estimated
    },
  ];
}
