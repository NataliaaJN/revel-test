const getApiData = async () => {
  const URL = "https://picsum.photos/v2/list?page=1&limit=9";

  // Call to api
  const response = await fetch(URL);
  const apiData = await response.json();
  const cleanedApiData = apiData.map((eachApiData) => {
    return {
      id: eachApiData.id,
      photo: eachApiData.download_url,
    };
  });
  return cleanedApiData;
};

export default getApiData;
