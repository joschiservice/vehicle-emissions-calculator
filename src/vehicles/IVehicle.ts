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
   * Calculates the break-even point when the total emissions of both cars are the same
   * @param comparingVehicle
   * @returns break-even point in kilometres
   */
  public getBreakEvenPointKm(comparingVehicle: IVehicle) {
    const currentVehicleEmissionsPerKm = this.getEmissionsPerKm();
    const comparingVehicleEmissionsPerKm = comparingVehicle.getEmissionsPerKm();

    if (currentVehicleEmissionsPerKm > comparingVehicleEmissionsPerKm) {
      throw new Error("This vehicle can't reach a break even point with the comparing vehicle, because emissions are higher per km.");
    }

    const currentEmissions = this.getProductionEmissions();
    const comparingEmissions = comparingVehicle.getProductionEmissions();

    // When the break even point will be reached
    return (comparingEmissions - currentEmissions)
      / (currentVehicleEmissionsPerKm - comparingVehicleEmissionsPerKm);
  }
}
