export const fetchCountries = () => {
    return ["USA", "Canada", "UK", "Australia"];
  };
  
  export const fetchCitiesByCountry = (country) => {
    const countryCities = {
      USA: ["New York", "Los Angeles", "Chicago"],
      Canada: ["Toronto", "Vancouver", "Montreal"],
      UK: ["London", "Manchester", "Birmingham"],
      Australia: ["Sydney", "Melbourne", "Brisbane"],
    };
    return countryCities[country] || [];
  };