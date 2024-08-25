import * as opsService from "./Ops"
import * as dataConstants from "../constants/Data.constant"
import AsyncStorage from "@react-native-async-storage/async-storage"

const getLoanList = async (data) => {
    console.log("llk", data)
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(
        base_url + `LMS/QuickLoan_Get_Application_Process_List`,
        data,
        token,
      )
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getQuickLoanDashboardCount = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(
        base_url + `LMS/GetQuickLoanDashboardCount`,
        data,
        token,
      )
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getQuickLoanSubMenu = async (data, id) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(
        id > 0
          ? base_url + `LMS/QuickLoan_Get_Process_Menu`
          : base_url + `LMS/QuickLoan_Get_Process_MenuTabs`,
        // base_url + `LMS/QuickLoan_CompletedPage`,
        data,
        token,
      )
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getBranchList = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(base_url + `LMS/GetBranchesList`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getApplicationNo = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(base_url + `LMS/getAppNo_AND_LoanNo`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getLoanProductList = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(base_url + `Masters/GetProductList`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getBranchHeadByBranch = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(base_url + `LMS/GetBranchHeadByBranch`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getSourceType = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(
        base_url + `LOS/LOS_GetLeadSourceForDropdown`,
        data,
        token,
      )
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getSourceName = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(base_url + `LOS/Get_PartnerForDropdown`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getEmployeeDropdown = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(base_url + `Masters/GetEmployeeDropdown`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getCollectionExecutive = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(base_url + `LMS/GetCollectionExecutive`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getAreaByBranch = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(base_url + `LMS/GetAreaByBranch`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getSubAreaByArea = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(base_url + `LMS/GetSubAreaByArea`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  submitQuickLoan = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(
        base_url + `LMS/QuickLoan_Save_Application`,
        data,
        token,
      )
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  submitDemographicDetails = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(base_url + `LOS/Save_CustomerInfo`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  submitCustomerDetails = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(base_url + `LMS/SaveCustomerInfoDetails`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getStateList = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(base_url + `Masters/GetState`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getDistrictList = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(base_url + `Masters/GetDistricts`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getTahsilList = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(base_url + `Masters/GetTahsil`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getOccupationList = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(base_url + `LMS/LMS_Commaon_Master`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getLoanSummary = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(base_url + `LMS/LMS_Get_Loan_Summary`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  getLoanReferance = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(base_url + `LMS/LMS_GetCustomerRef`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  }

export {
  getLoanList,
  getQuickLoanDashboardCount,
  getQuickLoanSubMenu,
  getApplicationNo,
  getBranchList,
  getLoanProductList,
  getBranchHeadByBranch,
  getSourceType,
  getSourceName,
  getEmployeeDropdown,
  getCollectionExecutive,
  getAreaByBranch,
  getSubAreaByArea,
  submitQuickLoan,
  submitDemographicDetails,
  submitCustomerDetails,
  getStateList,
  getDistrictList,
  getTahsilList,
  getOccupationList,
  getLoanSummary,
  getLoanReferance,
}
