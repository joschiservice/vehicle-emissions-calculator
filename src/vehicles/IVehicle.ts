import { DriveBehaviourManager } from '../managers/DriveBehaviourManager';

/**
 * Common interface for all types of vehicles
 */
export abstract class IVehicle {
  /**
   * Current state of the odometer in km.
   */
  public odometer: number = 0;

  /**
   * Get produced CO2 emissions for the vehicle production in kg.
   */
  abstract getProductionEmissions(): number;

  /**
   * Get produced CO2 emissions for the vehicle in g.
   */
  abstract getEmissionsPerKm(): number;

  /**
   * Calculates in how many months the total emissions of both cars are the same
   * @param comparingVehicle
   * @returns data about the break even point (months & km based on current DriveBehaviour)
   */
  public getBreakEvenPointData(comparingVehicle: IVehicle) {
    const currentVehicleEmissionsPerKm = this.getEmissionsPerKm();
    const comparingVehicleEmissionsPerKm = comparingVehicle.getEmissionsPerKm();

    if (currentVehicleEmissionsPerKm > comparingVehicleEmissionsPerKm) {
      throw new Error("This vehicle can't reach a break even point with the comparing vehicle, because emissions are higher per km.");
    }

    const currentEmissions = this.getProductionEmissions();
    const comparingEmissions = comparingVehicle.getProductionEmissions();

    // When the break even point will be reached
    const months = (comparingEmissions - currentEmissions)
      / (DriveBehaviourManager.drivenKmPerMonth
        * (currentVehicleEmissionsPerKm - comparingVehicleEmissionsPerKm));

    const km = months * DriveBehaviourManager.drivenKmPerMonth;

    return { months, km };
  }
}
