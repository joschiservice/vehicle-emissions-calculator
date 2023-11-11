const { Kia, EnergyConfigs } = require('vehicle-emissions-calculator');

const energyConfig = new EnergyConfigs.Germany2022();
const vehicle = new Kia.ESoul204(energyConfig);
const vehicle2 = new Kia.SoulMpi2_0();

const breakEvenKm = Math.ceil(vehicle.getBreakEvenPointKm(vehicle2));

// eslint-disable-next-line no-console
console.log(`Break-even point for the Kia e-Soul 204, compared to the Kia Soul 2.0 MPI, will be reached at ${breakEvenKm} km`);
