export const getApiKey = () => {
  let index = Number(localStorage.getItem('api_index'))
  localStorage.setItem('api_index', index+1)
  if (index%3 === 0) return process.env.REACT_APP_ALPHA_VANTAGE_APIKEY0
  if (index%3 === 1) return process.env.REACT_APP_ALPHA_VANTAGE_APIKEY1
  if (index%3 === 2) return process.env.REACT_APP_ALPHA_VANTAGE_APIKEY2
}