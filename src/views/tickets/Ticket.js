import React, { useEffect, useState } from "react"
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react"
import { getApiCall, postApiCall, putApiCall } from "src/services/AppSetting"
import { base } from "src/constants/Data.constant"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useParams } from "react-router-dom"

const Ticket = () => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)
  const [itemValue, setItemValue] = useState("")
  const [editModalVisible, setEditModalVisible] = useState(false)
  const [ticketData, setTicketData] = useState([])
  const [visible, setVisible] = useState(false)
  const [id, setId] = useState("")
  const [ticketSerialNumber, setTicketSerialNumber] = useState("")
  const [ticketNumber, setTicketNumber] = useState("")
  const [ticketAmount, setTicketAmount] = useState("")
  const [ticketStatus, setTicketStatus] = useState("")
  const [userName, setUserName] = useState("")
  const [userPhone, setUserPhone] = useState("")
  const [userDateAndTime, setUserDateAndTime] = useState("")

  useEffect(() => {
    ticket_list()
  }, [])

  const { gameIdVar, gameAmountIdVar } = useParams()
  console.log("gameIdVarVarrrr", gameIdVar)
  console.log("gameAmountIdVarrrr", gameAmountIdVar)

  const ticket_list = async () => {
    // let result = await getApiCall(base.ticketList)
    let req = {
      gameId: gameIdVar,
    }
    // console.log("resultticketlistreq", req);
    let result = await postApiCall(base.ticketList, req)
    // console.log("resultticketlistresult", result)
    let datamerge = JSON.parse(result.data[0].ticket_set)
    // console.log("datamergeeeerrr", datamerge)
    if (datamerge != null) {
      if (datamerge.length > 0) {
        let filterDataMerge = datamerge.filter((item) => item.agentId == "2")
        // console.log("filterDataMerge", filterDataMerge);
        setTicketData(filterDataMerge)
      } else {
        alert("no data found")
      }
    }
  }

  const save_ticket = async () => {
    let req = {
      ticketSerialNumber: ticketSerialNumber.target.value,
      ticketNumber: ticketNumber.target.value,
      ticketAmount: ticketAmount.target.value,
      ticketStatus: ticketStatus.target.value,
    }
    let result = await postApiCall(base.saveTicket, req)
    if (result.code == 200) {
      setVisible(false)
      toast.success("Successfully Created..!")
    }
  }

  const delete_ticket = async (value) => {
    let req = {
      id: value.ticket_id,
      status: "1",
    }
    let result = await putApiCall(base.deleteTicket, req)
    if (result.code == 200) {
      toast.success("Updated Successfully..!")
      setEditModalVisible(false)
    }
  }

  const get_edit_value = async (item) => {
    console.log("itemeditvalue", item)
    setEditModalVisible(true)
    setId(item.ticket_id)
    setTicketSerialNumber(item.bookingDateAndTime)
    // setTicketNumber(item.ticket_number);
    // setTicketAmount(item.ticket_amount);
    // setTicketStatus(item.ticket_status);
    setUserName(item.userName)
    setUserPhone(item.userPhone)
    setUserDateAndTime(item.bookingDateAndTime)
  }

  const edit_ticket = async () => {
    let req = {
      id: id,
      ticketSerialNumber: ticketSerialNumber,
      ticketNumber: ticketNumber,
      ticketAmount: ticketAmount,
      ticketStatus: ticketStatus,
    }
    let result = await putApiCall(base.editTicket, req)
    if (result.code == 200) {
      toast.error("Deleted Successfully..!")
    }
  }

  return (
    <CRow>
      <CCol xs={12} className="mb-4">
        <ToastContainer />
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CTable hover responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Ticket Serial Number</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Username</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Phone No.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Date and Time</CTableHeaderCell>
                  {/* <CTableHeaderCell scope="col">Action</CTableHeaderCell> */}
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {ticketData.map((item, index) => {
                  console.log("ticketDataitemm", item)
                  return (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                      <CTableDataCell>{item.ticketUniquieId}</CTableDataCell>
                      <CTableDataCell>{item.userName}</CTableDataCell>
                      <CTableDataCell>{item.userPhone}</CTableDataCell>
                      <CTableDataCell>{item.bookingDateAndTime}</CTableDataCell>
                      {/* <CTableDataCell>
                      <CButton color="warning" className='me-2' onClick={() => { get_edit_value(item) }}>Edit</CButton>
                      <CModal alignment="center" visible={editModalVisible}>
                        <CModalHeader>
                          <CModalTitle>Edit</CModalTitle>
                        </CModalHeader>
                        <CModalBody>
                          <CForm>
                            <div className="mb-3">
                              <CFormLabel htmlFor="ticketSerialNumber">Ticket Serial Number</CFormLabel>
                              <CFormInput
                                type="text"
                                id="ticketSerialNumber"
                                placeholder="Ticket Serial Number"
                                onChange={(e) => { setTicketSerialNumber(e) }}
                                defaultValue={ticketSerialNumber}
                              />
                              <CFormLabel htmlFor="userName">Username</CFormLabel>
                              <CFormInput
                                type="text"
                                id="userName"
                                placeholder="Ticket Number"
                                onChange={(e) => { setUserName(e) }}
                                defaultValue={userName}
                              />
                              <CFormLabel htmlFor="userPhone">Userphone</CFormLabel>
                              <CFormInput
                                type="text"
                                id="userPhone"
                                placeholder="User Phone No."
                                onChange={(e) => { setUserPhone(e) }}
                                defaultValue={userPhone}
                              />
                              <CFormLabel htmlFor="userDateAndTime">User Date and Time</CFormLabel>
                              <CFormInput
                                type="text"
                                id="userDateAndTime"
                                placeholder="User Date and Time"
                                onChange={(e) => { setUserDateAndTime(e) }}
                                defaultValue={userDateAndTime}
                              />
                              <CFormLabel htmlFor="gender">Ticket Status</CFormLabel>
                              <CFormSelect defaultValue={gender} id="gender" onChange={(e) => { setGender(e.target.value) }}>
                                <option value="" selected disabled>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                              </CFormSelect>
                            </div>
                          </CForm>
                        </CModalBody>
                        <CModalFooter>
                          <CButton color="secondary" onClick={() => setEditModalVisible(false)}>
                            Cancel
                          </CButton>
                          <CButton color="primary" onClick={() => edit_ticket()}>Update</CButton>
                        </CModalFooter>
                      </CModal>
                    </CTableDataCell> */}
                    </CTableRow>
                  )
                })}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Ticket
