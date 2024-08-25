import * as opsService from "./Ops"
import * as dataConstants from "../constants/Data.constant"
import AsyncStorage from "@react-native-async-storage/async-storage"

const get_sales_menu = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token)
    try {
      let result = await opsService.postData(base_url + `LOS/LOS_DashboardCount`, data, token)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  get_Lead_Source_For_Dropdown = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token)
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
  get_state_dropdown = async (data) => {
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
  get_district_dropdown = async (data) => {
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
  get_tehsil_dropdown = async (data) => {
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
  get_Employee_Branch_dropdown = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    let token = await AsyncStorage.getItem("token")
    // console.log(token);
    try {
      let result = await opsService.postData(
        base_url + `Masters/Get_EmployeeBranchForDropdown`,
        data,
        token,
      )
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  }

export {
  get_sales_menu,
  get_Lead_Source_For_Dropdown,
  get_state_dropdown,
  get_district_dropdown,
  get_tehsil_dropdown,
  get_Employee_Branch_dropdown,
}
