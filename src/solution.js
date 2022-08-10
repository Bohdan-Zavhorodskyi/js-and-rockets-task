import { getPreviousFlights } from "./api";
import { filterFlightData, sortFlightData } from "./utils/arrayHelpers";

export const prepareData = (flights) => {
  const filteredData = filterFlightData(flights);
  const sortedData = sortFlightData(filteredData);

  if (!sortedData || !sortedData.length) {
    return [];
  }

  const preparedData = sortedData.map((flight) => {
    const payloadsCount = flight.rocket.second_stage.payloads.length;

    const DTObject = {
      flight_number: flight.flight_number,
      mission_name: flight.mission_name,
      payloads_count: payloadsCount,
    };

    return DTObject;
  });

  return preparedData;
};

export const renderData = (data) => {
  const outBlock = document.getElementById("out");

  if (!outBlock || !data.length) {
    return;
  }

  outBlock.innerHTML = JSON.stringify(data, null, 2);
};

export const getRenderData = async () => {
  const flights = await getPreviousFlights();
  const preparedData = prepareData(flights);

  renderData(preparedData);
};
