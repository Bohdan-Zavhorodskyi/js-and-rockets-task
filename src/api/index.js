const api = async (url, meta) => {
  const response = await fetch(`https://api.spacexdata.com/${url}`, {
    ...meta,
  });

  return response.json();
};

export const getPreviousFlights = () => {
  return api("v3/launches/past", { method: "GET" });
};
