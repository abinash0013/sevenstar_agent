import React, { useEffect, useState } from "react"
import "./BookTicket.css"
import {
  CButton,
  CCard,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
  CWidgetStatsB,
} from "@coreui/react"
import { getApiCall, postApiCall, putApiCall } from "src/services/AppSetting"
import { base } from "src/constants/Data.constant"
import { useParams } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const BookTicket = () => {
  const [bookTicketNumber, setBookTicketNumber] = useState("")
  const [ticketSerialNumber, setTicketSerialNumber] = useState([])
  const [gameAmount, setGameAmount] = useState("")
  const [gameStatus,setGameStatus]=useState("")
  const [ticketSelectByAgent, setTicketSelectByAgent] = useState([])
  const [userName, setUserName] = useState("")
  const [userPhone, setUserPhone] = useState("")
  const [selectedTicket, setSelectedTicket] = useState([])
  const [ticketIdForCondition, setTicketIdForCondition] = useState("")

  useEffect(() => {
    viewTicketForAgents()
  }, [])

  const { id } = useParams()

  const addMoneyToAgentWallet = async () => {
    const agentId = localStorage.getItem("agentLoginId")
    let req = {
      agentId: agentId,
      requestedAmount: gameAmount,
    }
    // console.log("viewTicketForAgentsreqqtt", req)
    let result = await postApiCall(base.addMoneyToAgentWallet, req)
    // console.log("viewTicketForAgentsresultt", result)
  }

  const viewTicketForAgents = async () => {
    let req = {
      gameId: id,
    }
    // console.log("viewTicketForAgentsreqqtt", req)
    let result = await postApiCall(base.viewTicketForAgents, req)
    // console.log("viewTicketForAgentsGameAmount", result.data[0].game_amount)
    let datamerge = JSON.parse(result.data[0].ticket_set)
    // console.log("datamergeeeAmount", result.data[0].game_amount_per_ticket_to_agent)
    console.log("datamergeeeAmount", result.data[0])
    if (datamerge.length > 0) {
      setTicketSerialNumber(datamerge)
      setGameAmount(result.data[0].game_amount_per_ticket_to_agent) //commission amount to agent
      setGameStatus(result.data[0].game_status)
      // addMoneyToAgentWallet(result.data[0].game_amount)
    }
    // } else {
    //   console.log("No Data Foundddd.");
    // }
  }

  const selectTicketForBookByAgent = async (data, index) => {
    let dataArr = [...ticketSerialNumber]
    dataArr[index].is_select = !dataArr[index].is_select
    setTicketSerialNumber(dataArr)

    // if (selectedTicket.includes(data.id)) {
    //   // selectedTicket.splice(index, 1)
    //   // setTicketIdForCondition("")
    //   console.log("if", index, selectedTicket)
    // } else {
    // selectedTicket.push(data.id)
    setTicketIdForCondition(data.id)
    //   console.log("else")
    // }
    // console.log("selectedTicketByAgent", selectedTicket)
  }

  // const result = { status: true } // Replace with your actual result

  const bookTicketAmountByAgent = async () => {
    const agentId = localStorage.getItem("agentLoginId")
    let req = {
      agentsId: agentId,
      gameId: id,
      transactionType: "Ticket Booking",
      agentRequestedRemarks: "Credit Through Ticket Booking",
      requestedAmount: gameAmount,
      status: "Pending",
    }
    // console.log("reqqqqqbookTicketAmountByAgent", req)
    let result = await postApiCall(base.agentBookTicketAmount, req)
    // console.log("resultofbookTicketAmountByAgent", result)
  }

  const bookTicketByAgentsFun = async () => {
    // console.log("selectedTickettt", userPhone.target.value.length)
    if (userName == "") {
      toast.error("Please Enter Username")
    } else if (userPhone == "") {
      toast.error("Please Enter Userphone")
    } else if (userPhone.target.value.length != 10) {
      toast.error("Phone Number Should be atleast 10 digit")
    } else {
      let selectedTicket = []
      ticketSerialNumber.map((item, index) => {
        if (item.is_select) {
          selectedTicket.push(item.id)
        }
      })
      const agentId = localStorage.getItem("agentLoginId")
      let req = {
        agentId: agentId,
        gameId: id,
        userName: userName.target.value,
        userPhone: userPhone.target.value,
        selectedIdsForTicketBooking: JSON.stringify(selectedTicket),
      }
      // console.log("selectedIdsForTicketBookinggg", req)
      // let result = await putApiCall(base.bookTicketByAgents, req)
      let result = await postApiCall(base.bookTicketByAgents, req)
      // console.log("resultresulteerrrageagentId", typeof result.status)
      // if (result.status == true) {
      //   setUserName("")
      //   setUserPhone("")
      //   alert("Ticket Booked Successfully.!")
      //   viewTicketForAgents()
      // } else {
      //   alert("false")
      // }
      if (result.status === true) {
        // Clear the text boxes by updating state variables
        setUserName("")
        setUserPhone("")
        // Show alert
        bookTicketAmountByAgent()
        addMoneyToAgentWallet()
        viewTicketForAgents()
        toast.success("Ticket Booked Successfully.!")
      } else {
        toast.error("false")
      }
    }
  }

  const requestForTicketBook = async (ticketSerialNumberVal) => {
    // console.log("ticketSerialNumberVallll", ticketSerialNumberVal);
    let req = {
      ticketSet: JSON.stringify(ticketSerialNumberVal),
      gameId: id,
    }
    // console.log("stringreq", req);
    // let result = await putApiCall(base.bookTicketByAgents, req)
    // console.log("resultresulteerrrage", result);
    // if (result.status == true) {
    //   alert("Ticket Booked Successfully.!")
    //   setUserName("");
    //   setUserPhone("");
    // }
  }

  return (
    <CCard className="p-4">
      <ToastContainer />
      <CRow>
        <CCol xs={12}>
          {/* <CWidgetStatsB
            className="mb-3"
            progress={{ color: 'success', value: 75 }}
            title="Ticket Book isme all ticket aiga per game ka or dusre agent ne jo dicket kata h wo v dikhega"
            value="89.9%"
          /> */}
          <CRow className="mb-3">
            <CCol xs={12} className="m-1" style={{ display: "flex", flexWrap: "wrap" }}>
              {ticketSerialNumber?.map((item, index) => {
                console.log("ticketSerialNumberrr", item)
                return (
                  <div className="customBox" key={index}>
                    {item.agentId !== "" ? (
                      <CFormCheck
                        button={{ color: item.agentId != "" ? "primary" : "secondary" }}
                        id={item.id}
                        autoComplete="off"
                        label={item.id}
                        disabled
                      />
                    ) : (
                      <CFormCheck
                        button={{
                          color:
                            item.agentId != "" ? "red" : item.is_select ? "primary" : "warning",
                          variant: item.agentId != "" ? "filled" : item.is_select ? "outline" : "",
                          // variant: ticketIdForCondition != "" ? "" : "outline",
                        }}
                        id={item.id + "," + item.agentId}
                        autoComplete="off"
                        label={item.id}
                        onClick={() => {
                          selectTicketForBookByAgent(item, index)
                        }}
                      />
                    )}
                  </div>
                )
              })}
            </CCol>
          </CRow>
          <CForm className="row justify-between">
            {gameStatus !="Game Over" && (
              <>
            <CCol xs={12} md={6} className="mb-3 mb-sm-0">
              <CFormLabel htmlFor="name" className="visually-hidden">
                Name
              </CFormLabel>
              <CFormInput
                type="text"
                id="name"
                placeholder="Enter Name"
                // value={userName}
                onChange={(e) => {
                  setUserName(e)
                }}
              />
            </CCol>
            <CCol xs={12} md={6}>
              <CFormLabel htmlFor="phone" className="visually-hidden">
                Phone
              </CFormLabel>
              <CFormInput
                type="text"
                id="phone"
                placeholder="Enter Phone"
                maxLength={10}
                // value={userPhone}
                onChange={(e) => {
                  setUserPhone(e)
                }}
              />
            </CCol>
            </>
            )}
            {gameStatus == "Game Over" ? (
            <CCol xs={12} md={6} className="mt-3">
            <CButton
              type="submit"
              className="mb-3"
              onClick={() => {
                toast.error("This Game is Over")
              }}
            >
              Game Over
            </CButton>
            </CCol>
            ): (
            <CCol xs={12} md={6} className="mt-3">
              {ticketIdForCondition != "" ? (
                <CButton
                  type="submit"
                  className="mb-3"
                  onClick={() => {
                    bookTicketByAgentsFun()
                  }}
                >
                  Book
                </CButton>
              ) : (
                <CButton
                  type="submit"
                  className="mb-3"
                  onClick={() => {
                    toast.error("Please Select a Ticket")
                  }}
                >
                  Please Select a Ticket
                </CButton>
              )}
            </CCol>
            )}
          </CForm>
        </CCol>
      </CRow>
    </CCard>
  )
}

export default BookTicket
