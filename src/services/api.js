const getApiData = () => {
  const URL = "https://picsum.photos/v2/list?page=1&limit=9";

  // Call to api
  return fetch(URL)
    .then((response) => response.json())
    .then((apiData) => {
      const cleanedApiData = apiData.map((eachApiData) => {
        return {
          id: eachApiData.id,
          photo: eachApiData.download_url,
        };
      });
      return cleanedApiData;
    });
};

export default getApiData;
