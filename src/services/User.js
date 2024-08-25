import * as opsService from "./Ops"
import * as dataConstants from "../constants/Data.constant"
import AsyncStorage from "@react-native-async-storage/async-storage"

const login_user = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    try {
      // console.log(base_url + `MobileLogin/Mobile_For_UserLogin`)
      let result = await opsService.postData(base_url + `MobileLogin/Mobile_For_UserLogin`, data)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  get_new_pin = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    try {
      let result = await opsService.postData(base_url + `MobileLogin/Mobile_Login_PIN`, data)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  },
  logout_other_device = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url")
    try {
      let result = await opsService.postData(base_url + `MobileLogin/Mobile_Update_DeviceId`, data)
      return result
    } catch (e) {
      return { status: false, data: {}, message: e.message }
    }
  }
// registerUser = async (data) => {
//     try {
//         let result = await opsService.postData(
//             dataConstants.base.api + `user/signup.php`,
//             data
//         );
//         return result;
//     } catch (e) {
//         return { status: false, data: {}, message: e.message };
//     }
// },
// userSelfiedDoc = async (data, token, contentType) => {
//     try {
//         let result = await opsService.postDataContent(
//             dataConstants.base.api + `kyc/selfieImage`,
//             data,
//             token,
//             contentType
//         );
//         return result;
//     } catch (e) {
//         return { status: false, data: {}, message: e.message };
//     }
// },
// getUser = async (data) => {
//     try {
//         let result = await opsService.postData(
//             dataConstants.base.api + `user/profile.php`,
//             data
//         );
//         return result;
//     } catch (e) {
//         return { status: false, data: {}, message: e.message };
//     }
// },
// course_list = async (data) => {
//     try {
//         let result = await opsService.postData(
//             dataConstants.base.api + `course/course-list.php`,
//             data
//         );
//         return result;
//     } catch (e) {
//         return { status: false, data: {}, message: e.message };
//     }
// },
// searchcourse = async (data) => {
//     try {
//         let result = await opsService.postData(
//             dataConstants.base.api + `course/search-course.php`,
//             data
//         );
//         return result;
//     } catch (e) {
//         return { status: false, data: {}, message: e.message };
//     }
// },
// getBannerData = async (data) => {
//     try {
//         let result = await opsService.postData(
//             dataConstants.base.api + `banner/banner-list.php`,
//             data
//         );
//         return result;
//     } catch (e) {
//         return { status: false, data: {}, message: e.message };
//     }
// },
// SubjectList = async (data) => {
//     try {
//         let result = await opsService.postData(
//             dataConstants.base.api + `subject/subject.php`,
//             data
//         );
//         return result;
//     } catch (e) {
//         return { status: false, data: {}, message: e.message };
//     }
// },
// LatestVideo = async (data) => {
//     try {
//         let result = await opsService.postData(
//             dataConstants.base.api + `video/promotional-video.php`,
//             data
//         );
//         return result;
//     } catch (e) {
//         return { status: false, data: {}, message: e.message };
//     }
// },
// MethodList = async (data) => {
//     try {
//         let result = await opsService.postData(
//             dataConstants.base.api + `exam/exam-list.php`,
//             data
//         );
//         return result;
//     } catch (e) {
//         return { status: false, data: {}, message: e.message };
//     }
// },
// LatestVideoclass = async (data) => {
//     try {
//         let result = await opsService.postData(
//             dataConstants.base.api + `video/live-video.php`,
//             data
//         );
//         return result;
//     } catch (e) {
//         return { status: false, data: {}, message: e.message };
//     }
// },
// oldclassssVideo = async (data) => {
//     try {
//         let result = await opsService.postData(
//             dataConstants.base.api + `video/live-videoold.php`,
//             data
//         );
//         return result;
//     } catch (e) {
//         return { status: false, data: {}, message: e.message };
//     }
// },
// imageupload = async (data, contentType) => {
//     try {
//         let result = await opsService.postData(
//             dataConstants.base.api + `user/image-upload.php`,
//             data,
//             contentType
//         );
//         return result;
//     } catch (e) {
//         return { status: false, data: {}, message: e.message };
//     }
// },
// editprofile = async (data, contentType) => {
//     try {
//         let result = await opsService.postData(
//             dataConstants.base.api + `user/profile-edit.php`,
//             data,
//             contentType
//         );
//         return result;
//     } catch (e) {
//         return { status: false, data: {}, message: e.message };
//     }
// },
// coursePurchase = async (data) => {
//     try {
//         let result = await opsService.postData(
//             dataConstants.base.api + `course-purchage/purchage-list.php`,
//             data
//         );
//         return result;
//     } catch (e) {
//         return { status: false, data: {}, message: e.message };
//     }
// },
// ChangePasswordapi = async (data) => {
//     try {
//         return await opsService.postData(
//             dataConstants.base.api + "user/password-change.php",
//             data
//         );
//     } catch (error) {
//         return false;
//     }
// },
// get_chapter_list = async (data) => {
//     try {
//         let result = await opsService.postData(
//             dataConstants.base.api + `chapter/chapter-list.php`,
//             data
//         );
//         return result;
//     } catch (e) {
//         return { status: false, data: {}, message: e.message };
//     }
// },
// get_ExamList_list = async (data) => {
//     try {
//         let result = await opsService.postData(
//             dataConstants.base.api + `exam/exam-list.php`,
//             data
//         );
//         return result;
//     } catch (e) {
//         return { status: false, data: {}, message: e.message };
//     }
// },
// feed_back = async (data) => {
//     try {
//         let result = await opsService.postData(
//             dataConstants.base.api + `feedback/feedback.php`,
//             data
//         );
//         return result;
//     } catch (e) {
//         return { status: false, data: {}, message: e.message };
//     }
// },
// forgot = async (data) => {
//     try {
//         let result = await opsService.postData(
//             dataConstants.base.api + `user/forgot-password.php`,
//             data
//         );
//         return result;
//     } catch (e) {
//         return { status: false, data: {}, message: e.message };
//     }
// },
// _Pdflist = async (data) => {
//     try {
//         let result = await opsService.postData(
//             dataConstants.base.api + `pdf/pdf-list.php`,
//             data
//         );
//         return result;
//     } catch (e) {
//         return { status: false, data: {}, message: e.message };
//     }
// };
//       pdflist:'pdf/pdf-list.php',
export {
  login_user,
  get_new_pin,
  logout_other_device,
  // registerUser,
  // course_list,
  // searchcourse,
  // userSelfiedDoc,
  // getUser,
  // getBannerData,
  // SubjectList,
  // LatestVideo,
  // MethodList,
  // LatestVideoclass,
  // oldclassssVideo,
  // imageupload,
  // editprofile,
  // coursePurchase,
  // ChangePasswordapi,
  // get_chapter_list,
  // get_ExamList_list,
  // feed_back,
  // forgot,
  // _Pdflist,
}
