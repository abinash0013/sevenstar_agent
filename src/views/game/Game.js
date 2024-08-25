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
import { Link } from "react-router-dom"

const Game = () => {
  const [gameListData, setGameListData] = useState([])
  // const [search, setSearch] = useState([])
  const [prevPage, setPrevPage] = useState(0)
  const [nextPage, setNextPage] = useState(10)
  useEffect(() => {
    game_list(prevPage, nextPage)
  }, [])

  // const game_list = async (min, max) => {
  //   // let result = await getApiCall(base.gameList)
  //   let req = {
  //     min: min,
  //     max: max,
  //   }
  //   console.log("gamelistttreq", req)
  //   let result = await postApiCall(base.gameList, req)
  //   console.log("gamelisttt", result)
  //   setGameListData(result.data)
  //   setSearch(result.data)
  // }

  const game_list = async (min, max) => {
    let result = await getApiCall(base.gameList)
    console.log("gamelisttt", result)
    setGameListData(result)
  }

  // conBookTicket

  return (
    <CRow>
      <CCol xs={12} className="mb-4 d-flex flex-row justify-content-end const">
        {/* <div className="w-25">
          <CFormInput
            type="text"
            id="search"
            placeholder="Search"
            onChange={(e) => {
              setSearch(
                gameListData.filter((data) =>
                  data.game_name.toLowerCase().includes(e.target.value.toLowerCase()),
                ),
              )
            }}
          />
        </div> */}
        <ToastContainer />
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CTable hover responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Game Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Game Amount</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Game Start Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Game Start Time</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {gameListData?.map((item, index) => {
                  console.log("itemnnnnnm", item)
                  return (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                      <CTableDataCell>{item.game_name}</CTableDataCell>
                      <CTableDataCell>{item.game_amount}</CTableDataCell>
                      <CTableDataCell>{item.game_start_date}</CTableDataCell>
                      <CTableDataCell>{item.game_start_time}</CTableDataCell>
                      <CTableDataCell>
                        {/* <CButton color="warning" className='me-2' onClick={() => { get_edit_value(item) }}>More</CButton> */}
                        <Link to={`/bookTicket/${item.game_id}`}>
                          <CButton color="info" className="me-2">
                            More
                          </CButton>
                        </Link>
                        <Link to={`/ticket/${item.game_id}`}>
                          <CButton color="info" className="me-2 mt-2 mt-sm-0">
                            Ticket Booked
                          </CButton>
                        </Link>

                        {/* <CModal alignment="center" visible={editModalVisible}>
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
                              <CFormLabel htmlFor="ticketNumber">Ticket Number</CFormLabel>
                              <CFormInput
                                type="text"
                                id="ticketNumber"
                                placeholder="Ticket Number"
                                onChange={(e) => { setTicketNumber(e) }}
                                defaultValue={ticketNumber}
                              />
                              <CFormLabel htmlFor="ticketAmount">Ticket Amount</CFormLabel>
                              <CFormInput
                                type="text"
                                id="ticketAmount"
                                placeholder="Ticket Amount"
                                onChange={(e) => { setTicketAmount(e) }}
                                defaultValue={ticketAmount}
                              />
                              <CFormLabel htmlFor="ticketStatus">Ticket Status</CFormLabel>
                              <CFormInput
                                type="text"
                                id="ticketStatus"
                                placeholder="Ticket Status"
                                onChange={(e) => { setTicketStatus(e) }}
                                defaultValue={ticketStatus}
                              />
                            </div>
                          </CForm>
                        </CModalBody>
                        <CModalFooter>
                          <CButton color="secondary" onClick={() => setEditModalVisible(false)}>
                            Cancel
                          </CButton>
                          <CButton color="primary" onClick={() => edit_ticket()}>Update</CButton>
                        </CModalFooter>
                      </CModal> */}
                      </CTableDataCell>
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

export default Game
