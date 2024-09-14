import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react"
import CIcon from "@coreui/icons-react"
import Toast from "src/components/toast/Toast"
import "react-toastify/dist/ReactToastify.css"
import { base } from "src/constants/Data.constant"
import { getApiCall, postApiCall, putApiCall } from "src/services/AppSetting"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { cilLockLocked, cilUser } from "@coreui/icons"

const Login = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [hideForgotPasswordDiv, setHideForgotPasswordDiv] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")

  const successToast = () => {
    toast.success("Success !", {
      position: toast.POSITION.TOP_RIGHT,
    })
  }
 
  const agent_list = async () => {
    let result = await getApiCall(base.agentEmailList)
    if(result.length > 0){
      const emailExists = result.some(agent => agent.agents_email === userName.target.value)
      if(emailExists){
        forgotPasswordByAgent()
      } else { 
          toast.error("Please Enter Valid Email")
        } 
    }
  }

  const submitLogin = async () => {
    if (userName.target.value === "") {
      toast.error("Username is mandatory");
    } else if (password.target.value === "") {
      toast.error("Password is mandatory");
    } else {
      let req = {
        username: userName.target.value,
        password: password.target.value,
      };
  
      try {
        let result = await postApiCall(base.agentLogin, req);
        console.log("API result:", result);
  
        if (result.status === true) {
          console.log("Login successful");
          if (result.data[0].agents_active_status === "Active") {
            successToast();          
            localStorage.setItem('agentLoginId', result.data[0].agents_id);
            console.log("Agent ID set:", result.data[0].agents_id);  
            // Make sure navigate is working correctly
            navigate("/dashboard");
          } else {
            toast.error(result.data[0].agents_status_remarks);
          }
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        console.error("Error during login:", error);
        toast.error("An unexpected error occurred.");
      }
    }
  };

  const showHandleForgotPassword = async () => {
    setHideForgotPasswordDiv(false)
  }

  
  const hideHandleForgotPassword = async () => {
    setHideForgotPasswordDiv(true)
  }

  const forgotPasswordByAgent = async () => {
    if(newPassword.target.value == ""){
      toast.error("Please Enter New Password")
    } else if(confirmPassword.target.value == ""){
      toast.error("Please Enter Confirm Password")
    } else if(newPassword.target.value != confirmPassword.target.value){
      toast.error("Confirm Password is not matched")
    } else {
      let req = {
        email: userName.target.value,
        newPassword: confirmPassword.target.value
      }
      let result = await putApiCall(base.forgotPasswordByAgent, req)
      if(result.code == 200){
        toast.success('Password Update Successfully')
        setHideForgotPasswordDiv(true)
        setNewPassword("")
        setConfirmPassword("")
        setPassword("")
        navigate("/");
      }
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <ToastContainer />
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  {hideForgotPasswordDiv ? (
                    <CForm>
                      <h1>Agent Login</h1>
                      <p className="text-medium-emphasis">Login to access your Agent Dashboard</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                          placeholder="Username"
                          autoComplete="username"
                          onChange={(e) => {
                            setUserName(e)
                          }}
                        />
                      </CInputGroup>
                      <CInputGroup className="">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          onChange={(e) => {
                            setPassword(e)
                          }}
                        />
                      </CInputGroup>                    
                      <CButton color="link" className="px-0 mb-4 d-flex justify-end" style={{width: "100%", justifyContent: "right"}} onClick={showHandleForgotPassword}>
                        Forgot password?
                      </CButton>
                      <CRow>
                        <CCol xs={6}>
                          <CButton color="primary" className="px-4" onClick={() => submitLogin()}>
                            Login
                          </CButton>
                        </CCol> 
                      </CRow>
                    </CForm>
                    ) : (
                    <CForm>
                      <h1>Forgot Password</h1><CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                          placeholder="Username"
                          autoComplete="username"
                          onChange={(e) => {
                            setUserName(e)
                          }}
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          placeholder="Enter New Password" 
                          onChange={(e) => {
                            setNewPassword(e)
                          }}
                        />
                      </CInputGroup>
                      <CInputGroup className="">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Re-Enter Your New Password"
                          onChange={(e) => {
                            setConfirmPassword(e)
                          }}
                        />
                      </CInputGroup>  
                      <CButton color="link" className="px-0 mb-4 d-flex justify-end" style={{width: "100%", justifyContent: "right"}} onClick={hideHandleForgotPassword}>
                        Go to Login Page
                      </CButton>
                      <CRow>
                        <CCol xs={6}>
                          <CButton color="primary" className="px-4" onClick={() => agent_list()}>
                            Save
                          </CButton>
                        </CCol> 
                      </CRow>
                    </CForm>
                    )
                  }
                </CCardBody>
              </CCard>
              {/* <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
