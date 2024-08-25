import { base } from "src/constants/Data.constant"
import * as opsService from "./Ops"
const postApiCall = async (url, request) => {
    let token = localStorage.getItem("token")
    try {
      let result = await opsService.postData(url, request, token)
      // console.log('resultPostdata', result)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  putApiCall = async (url, request) => {
    let token = localStorage.getItem("token")
    try {
      let result = await opsService.putData(url, request, token)
      // console.log('resultPostdata', result)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getApiCall = async (url) => {
    try {
      let result = await opsService.getData(url, false)
      console.log("resultresultttt", result)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  }
export { postApiCall, getApiCall, putApiCall }
