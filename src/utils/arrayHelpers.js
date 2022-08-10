import { ALLOWED_DATE } from "./constants";

/**
 * @typedef PayloadsData
 * @property {string} customers
 **/

/**
 * @typedef FlightsData
 * @property {object} rocket
 * @property {object} rocket.second_stage
 * @property {Array<PayloadsData>} rocket.second_stage.payloads
 * @property {string} launch_date_utc
 * @property {string} launch_year
 *
 **/

/**
  @description This function accepts an array of flights and returns a new array of filtered flights where a customer of the payload was NASA
  @param {Array<FlightsData>} flights
  @return {Array<FlightsData>}
**/

export const filterFlightData = (flights) => {
  if (!flights || !flights.length) {
    return [];
  }
  const filteredData = flights.filter((flight) => {
    const isAllowedDate = flight.launch_year === ALLOWED_DATE;

    const reg = /NASA/g;
    const payloads = flight.rocket.second_stage.payloads;
    const isAllowedCustomer = !!payloads.filter((payload) =>
      payload.customers.some((customer) => reg.test(customer))
    ).length;

    return isAllowedDate && isAllowedCustomer;
  });

  return filteredData;
};

/**
  @description This function accepts an array of flights and returns a new array of sorted flights by a count of payloads and launch date
  @param {Array<FlightsData>} flights
  @return {Array<FlightsData>}
**/

export const sortFlightData = (flights) => {
  if (!flights || !flights.length) {
    return [];
  }
  const sortedData = flights.sort((a, b) => {
    const payloadsCountA = a.rocket.second_stage.payloads.length;
    const payloadsCountB = b.rocket.second_stage.payloads.length;

    if (payloadsCountA < payloadsCountB) {
      return 1;
    }

    if (a.launch_date_utc > b.launch_date_utc) {
      return -1;
    }

    return 1;
  });

  return sortedData;
};
