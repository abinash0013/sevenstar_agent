import * as opsService from "./Ops"
import * as dataConstants from "../constants/Data.constant"
import AsyncStorage from "@react-native-async-storage/async-storage"

const getReceiptList = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(base_url + `LMS/LMS_RECEIPT_BOOK`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getVoucherDetails = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    // console.log("111");
    try {
      // console.log(base_url + `Mobile/LMS_Get_Voucher_DetailsForApp`);
      let result = await opsService.postData(
        base_url + `Mobile/LMS_Get_Voucher_DetailsForApp`,
        data,
        token,
      )
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  myFollowUpPtpList = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(base_url + `LMS/LMS_RECEIPT_BOOK`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  GetConfigurationDetails = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(
        base_url + `Masters/GetConfigurationDetails`,
        data,
        token,
      )
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getCollectionListApp = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    try {
      let result = await opsService.postData(
        base_url + `Mobile/Get_Collection_List_App`,
        data,
        token,
      )
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  send_process = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(base_url + `LMS/CRM_Request_Creation`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  }
export {
  getReceiptList,
  getVoucherDetails,
  myFollowUpPtpList,
  GetConfigurationDetails,
  getCollectionListApp,
  send_process,
}
