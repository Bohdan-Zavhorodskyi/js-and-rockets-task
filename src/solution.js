import { getPreviousFlights } from "./api";

const ALLOWED_DATE = "2018";

const filterFlightData = (flights) => {
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

const sortFlightData = (flights) => {
  if (!flights || !flights.length) {
    return [];
  }
  const sortedData = flights.sort((a, b) => {
    const payloadsCountA = a.rocket.second_stage.payloads.length;
    const payloadsCountB = b.rocket.second_stage.payloads.length;

    return payloadsCountA < payloadsCountB
      ? 1
      : a.launch_date_utc > b.launch_date_utc
      ? -1
      : 1;
  });
  return sortedData;
};

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
