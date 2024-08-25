import axios from "axios"

const postData = async (url = "", data, token = false) => {
  // console.log("url",url)
  let tokenData = ""
  if (token) {
    tokenData = "Bearer " + token
  }
  var header = { headers: { Authorization: tokenData } }
  let response = await axios.post(url, data, header)
  // let response = await axios.post(url, data, { headers:  { "Authorization": tokenData }});
  return response.data
}
const postDataContent = async (url = "", data, token = false, contentType) => {
  let tokenData = ""
  if (token) {
    tokenData = "Bearer " + token
  }
  // console.log('contentType', contentType)
  let response = await axios.post(url, data, {
    headers: { Authorization: tokenData, "content-type": contentType },
  })
  return response.data
}
const putData = async (url = "", data, token = false) => {
  if (token) {
    token = "Bearer " + token
  }
  let response = await axios.put(url, data, {
    headers: { Authorization: token },
  })
  return response.data
}
const getData = async (url = "", token = false) => {
  if (token) {
    token = "Bearer " + token
  }
  var header = { headers: { Authorization: token } }
  let response = await axios.get(url, header)
  return response.data
}
const deleteData = async (url = "", token = false) => {
  if (token) {
    token = "Bearer " + token
  }
  let response = await axios.delete(url, {
    headers: { Authorization: token },
  })
  return response.data
}
export async function downloadFile(fileUrl, data, token = false) {
  if (token) {
    token = "Bearer " + token
  }
  axios
    .post(fileUrl, data, {
      responseType: "blob",
      headers: { Authorization: token },
    })
    .then(function (response) {
      const type = response.headers["content-type"]
      const blob = new Blob([response.data], {
        type: type,
        encoding: "UTF-8",
      })
      const link = document.createElement("a")
      link.href = window.URL.createObjectURL(blob)
      link.download = data.fileName
      link.click()
    })
}

export { postData, getData, deleteData, putData, postDataContent }
