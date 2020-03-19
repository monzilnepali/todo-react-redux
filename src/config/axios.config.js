import axios from 'axios'
const http = axios.create({
  baseURL: 'http://127.0.0.1:9000/api/'
})

export const getRequest = (url) => {
  console.log("getRequest")
  return http({
    method: 'GET',
    url
  });
}
export const postRequest = (url, data) => {
  return http({
    method: 'POST',
    url, data
  })
}

export const deleteRequest = (url) => {
  return http({
    method: 'DELETE',
    url
  })
}

export function putRequest(url, headers = "") {
  return http({
    method: 'PUT',
    url
  })
}