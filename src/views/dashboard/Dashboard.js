import React, { useEffect, useState } from "react"

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react"
import { CChartLine } from "@coreui/react-chartjs"
import { getStyle, hexToRgba } from "@coreui/utils"
import CIcon from "@coreui/icons-react"
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from "@coreui/icons"

import avatar1 from "src/assets/images/avatars/1.jpg"
import avatar2 from "src/assets/images/avatars/2.jpg"
import avatar3 from "src/assets/images/avatars/3.jpg"
import avatar4 from "src/assets/images/avatars/4.jpg"
import avatar5 from "src/assets/images/avatars/5.jpg"
import avatar6 from "src/assets/images/avatars/6.jpg"

import WidgetsBrand from "../widgets/WidgetsBrand"
import WidgetsDropdown from "../widgets/WidgetsDropdown"
import { useNavigate } from "react-router-dom"
import { getApiCall, postApiCall } from "src/services/AppSetting"
import { base } from "src/constants/Data.constant"

const Dashboard = () => {
  const navigate = useNavigate()
  const [loginId, setLoginId] = useState("")
  const [agentList, setAgentList] = useState([])
  const [agentOwnName, setAgentOwnName] = useState("")
  const [agentOwnPhone, setAgentOwnPhone] = useState("")
  const [agentOwnGender, setAgentOwnGender] = useState("")

  useEffect(() => {
    // const sessionData = async () => {
    //   const loggedInUser = await localStorage.getItem("adminLoginId");
    //   console.log("loggedInUserr", loggedInUser);
    //   setLoginId(loggedInUser);
    //   if (loggedInUser == null || loggedInUser == "") {
    //     navigate("/login");
    //   } else {
    //   }
    // }
    // sessionData()
    agentsOwnDetails()
    agentsList()
  }, [])

  const agentsOwnDetails = async () => {
    // const loggedInUser = await localStorage.getItem("adminLoginId");
    let req = {
      // agentId: loggedInUser
      agentId: "22",
    }
    console.log("agentsOwnDetailsresulttttreq", req)
    let result = await postApiCall(base.agentsOwnDetails, req)
    console.log("agentsOwnDetailsresulttttstatus", result.data[0].agents_id)
    // if (result.data[0].agents_id == req) {
    if (result.status == true) {
      setAgentOwnName(result.data[0].agents_name)
      setAgentOwnPhone(result.data[0].agents_phone)
      setAgentOwnGender(result.data[0].agents_gender)
    } else {
      alert("No Data Found.!!!")
    }
  }

  const agentsList = async () => {
    let result = await getApiCall(base.agentsList)
    setAgentList(result)
  }

  // const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const progressGroupExample2 = [
    { title: "Total Ticket", icon: cilUser, value: 600 },
    // { title: 'Sold Ticket', icon: cilUser, value: 0 },
    // { title: 'Total Haftsheet Booked', icon: cilUser, value: 28 },
    // { title: 'Total Fullsheet Booked', icon: cilUser, value: 7 },
    // { title: 'Ticket Left', icon: cilUser, value: 544 },
    // { title: 'Ticket Price', icon: cilUser, value: 30 },
    { title: "Agent Commission", icon: cilUser, value: 0 },
    // { title: 'Total Revenue', icon: cilUser, value: 0 },
    // { title: 'Total Profit', icon: cilUser, value: 0 },
  ]

  // { console.log("authenticateddd", agentLoginId) }

  const tableExample = [
    {
      avatar: { src: avatar1, status: "success" },
      user: {
        name: "Yiorgos Avraamu",
        new: true,
        registered: "Jan 1, 2021",
      },
      country: { name: "USA", flag: cifUs },
      usage: {
        value: 50,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "success",
      },
      payment: { name: "Mastercard", icon: cibCcMastercard },
      activity: "10 sec ago",
    },
    {
      avatar: { src: avatar2, status: "danger" },
      user: {
        name: "Avram Tarasios",
        new: false,
        registered: "Jan 1, 2021",
      },
      country: { name: "Brazil", flag: cifBr },
      usage: {
        value: 22,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "info",
      },
      payment: { name: "Visa", icon: cibCcVisa },
      activity: "5 minutes ago",
    },
    {
      avatar: { src: avatar3, status: "warning" },
      user: { name: "Quintin Ed", new: true, registered: "Jan 1, 2021" },
      country: { name: "India", flag: cifIn },
      usage: {
        value: 74,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "warning",
      },
      payment: { name: "Stripe", icon: cibCcStripe },
      activity: "1 hour ago",
    },
    {
      avatar: { src: avatar4, status: "secondary" },
      user: { name: "Enéas Kwadwo", new: true, registered: "Jan 1, 2021" },
      country: { name: "France", flag: cifFr },
      usage: {
        value: 98,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "danger",
      },
      payment: { name: "PayPal", icon: cibCcPaypal },
      activity: "Last month",
    },
    {
      avatar: { src: avatar5, status: "success" },
      user: {
        name: "Agapetus Tadeáš",
        new: true,
        registered: "Jan 1, 2021",
      },
      country: { name: "Spain", flag: cifEs },
      usage: {
        value: 22,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "primary",
      },
      payment: { name: "Google Wallet", icon: cibCcApplePay },
      activity: "Last week",
    },
    {
      avatar: { src: avatar6, status: "danger" },
      user: {
        name: "Friderik Dávid",
        new: true,
        registered: "Jan 1, 2021",
      },
      country: { name: "Poland", flag: cifPl },
      usage: {
        value: 43,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "success",
      },
      payment: { name: "Amex", icon: cibCcAmex },
      activity: "Last week",
    },
  ]

  const _render_agent_list = (data) => {
    return data?.map((item, index) => {
      return (
        <CTableRow v-for="item in tableItems" key={index}>
          <CTableDataCell>
            <div className="text-center">{item.agents_name}</div>
          </CTableDataCell>
          <CTableDataCell>
            <div className="text-center">{item.agents_gender}</div>
          </CTableDataCell>
          <CTableDataCell>
            <div className="text-center">{item.agents_phone}</div>
          </CTableDataCell>
        </CTableRow>
      )
    })
  }

  return (
    <>
      {/* <WidgetsDropdown /> */}
      {/* <CCard className="mb-4">
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard> */}

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Agent Own Info</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={12} xl={12}>
                  <CRow>
                    <CCol sm={4}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Agent Name</div>
                        <div className="fs-5 fw-semibold">
                          {agentOwnName ? agentOwnName : "no data found."}
                        </div>
                      </div>
                    </CCol>
                    <CCol sm={4}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Agent Phone</div>
                        <div className="fs-5 fw-semibold">
                          {agentOwnPhone ? agentOwnPhone : "no data found."}
                        </div>
                      </div>
                    </CCol>
                    <CCol sm={4}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Agent Gender</div>
                        <div className="fs-5 fw-semibold">
                          {agentOwnGender ? agentOwnGender : "no data found."}
                        </div>
                      </div>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol sm={4}>
                      <div className="border-start border-start-4 border-start-dark py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Total Ticket</div>
                        <div className="fs-5 fw-semibold">
                          {agentOwnName ? agentOwnName : "no data found."}
                        </div>
                      </div>
                    </CCol>
                    <CCol sm={4}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Agent Commission</div>
                        <div className="fs-5 fw-semibold">
                          {agentOwnPhone ? agentOwnPhone : "no data found."}
                        </div>
                      </div>
                    </CCol>
                    {/* <CCol sm={4}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Agent Gender</div>
                        <div className="fs-5 fw-semibold">{agentOwnGender ? agentOwnGender : "no data found."}</div>
                      </div>
                    </CCol> */}
                  </CRow>
                  <hr className="mt-0" />
                  {/* {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))} */}
                  <div className="mb-5"></div>
                </CCol>
              </CRow>
              <br />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Agents List</CCardHeader>
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  {/* <CTableHeaderCell className="text-center">
                    <CIcon icon={cilPeople} />
                </CTableHeaderCell> */}
                  <CTableHeaderCell className="text-center">Agent Name</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Gender</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Ticket Sold</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>{_render_agent_list(agentList || [])}</CTableBody>
            </CTable>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
