export const fetchUrl = () => {
  const apiPath = '/api/v1';  
  return `${process.env.REACT_APP_API_ENDPOINT}${apiPath}`;
};
