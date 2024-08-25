import * as opsService from "./Ops"
import * as dataConstants from "../constants/Data.constant"
import AsyncStorage from "@react-native-async-storage/async-storage"

const get_CollectionList = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(
        base_url + `Mobile/Customer_Get_DueList_APP`,
        data,
        token,
      )
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getDashboardData = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    console.log(base_url)
    try {
      let result = await opsService.postData(
        base_url + `Mobile/LOSGetDashboardCountAPP`,
        data,
        token,
      )
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getCustomerData = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(
        base_url + `Mobile/Customer_Get_ReceiptDetail_APP`,
        data,
        token,
      )
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getHeadCharge = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(
        base_url + `Masters/Get_ChargesHeadsByProduct_ForDropdow`,
        data,
        token,
      )
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getReceiptDetailsApp = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(
        base_url + `Mobile/Get_Receipt_Detail_App`,
        data,
        token,
      )
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getEmiDetailsData = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // // console.log(token);
    try {
      let result = await opsService.postData(base_url + `LMS/Get_Acc_Leadger_Loan`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getCollectionReceiptNo = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(base_url + `Masters/GetReceiptNo`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  createFollowUp = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      console.log(base_url + `LMS/LMS_Save_NoteRecommendation`)
      let result = await opsService.postData(
        base_url + `LMS/LMS_Save_NoteRecommendation`,
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
  previousFollowUp = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      // console.log(base_url + `LMS/CRM_Request_Task`);
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
  completeFollowUp = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      console.log(base_url + `LMS/CRM_Request_Creation`)
      let result = await opsService.postData(base_url + `LMS/CRM_Request_Creation`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  sendAccSaveVoucher = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(base_url + `LMS/Acc_Save_Voucher`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getSmsConfigration = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(base_url + `Masters/Get_Sms_Configration`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  sendSmsMessage = async () => {
    let url =
      "http://sms.finnaux.com/aapimanu/smsapi?key=d9f68aa8645f99abbd8763d0b90cebd9&sender_id=FINAUX&route=1&mobileno=9982669294&sentmessage=Dear Anil, The Login Fee of Rs. 1200 is received vide Receipt No.12122 on Dated 21323.View receipt hear. Finnaux Techsolutions Pvt. Ltd."
    try {
      let result = await opsService.getData(url)
      return result
    } catch (e) {
      r
      return { status: false, data: {}, message: e.message }
    }
  }
export {
  //get_CollectionDashboard,
  getDashboardData,
  get_CollectionList,
  getCustomerData,
  getHeadCharge,
  getReceiptDetailsApp,
  getEmiDetailsData,
  getCollectionReceiptNo,
  createFollowUp,
  previousFollowUp,
  completeFollowUp,
  sendAccSaveVoucher,
  getSmsConfigration,
  sendSmsMessage,
  getCollectionListApp,
}
