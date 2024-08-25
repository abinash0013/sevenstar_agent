import React, { useState, useEffect } from "react"
import {
  CRow,
  CCol,
  CForm,
  CButton,
  CFormInput,
  CFormLabel,
  CModalBody,
  CModalTitle,
  CFormSelect,
} from "@coreui/react"
// import { useParams } from "react-router-dom"
import { base } from "src/constants/Data.constant"
import { postApiCall } from "src/services/AppSetting"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import moment from "moment"

const AgentTransaction = () => {
  //   const { id } = useParams()
  const [agentsTransaction, setAgentsTransaction] = useState([])
  const [transactionAmount, setTransactionAmount] = useState("")
  const [transactionRemarks, setTransactionRemarks] = useState("")
  const [transactionType, setTransactionType] = useState("")
  const [requestedRemarks, setRequestedRemarks] = useState("")
  const [requestedAmount, setRequestedAmount] = useState("")
  const [agentsDetails, setAgentsDetails] = useState([])

  useEffect(() => {
    agents_details()
    agents_transection_list()
  }, [])

  const agents_details = async () => {
    const agentId = localStorage.getItem("agentLoginId")
    try {
      let body = {
        agent_id: agentId,
      }
      // console.log("resulttteebody", body)
      let result = await postApiCall(base.agentDetails, body)
      // console.log("resultttee", result)
      // console.log("resulttteewallet", result.data[0].wallet)
      // setTransactionAmount('')
      setAgentsDetails(result.data[0])
    } catch (e) {}
  }

  const agents_transection_list = async () => {
    try {
      const agentId = localStorage.getItem("agentLoginId")
      let body = {
        agentId: agentId,
      }
      let result = await postApiCall(base.agentCreditDebitTransacationList, body)
      // console.log("agentTransacationListresulttttt", result)
      const filtered = result.data.filter(
        (item) => item.type_cr_dr === "Credit" || item.type_cr_dr === "Debit",
      )
      setAgentsTransaction(filtered)
    } catch (e) {}
  }

  const agents_debit_request = async () => {
    const agentId = localStorage.getItem("agentLoginId")
    if (agentsDetails.wallet > 0) {
      // console.log("wallet is greater than 0")
      if (requestedAmount == "") {
        toast.error("Amount field is Mandatory")
      } else {
        let body = {
          agentsId: agentId,
          transactionType: "Debit",
          agentRequestedRemarks: requestedRemarks,
          requestedAmount: requestedAmount,
          status: "Pending",
          createdAt: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        }
        if (Number(agentsDetails.wallet) > Number(requestedAmount)) {
          let result = await postApiCall(base.agentDebitRequest, body)
          if (result.status == true) {
            console.log("statusss", result.status)
            agents_transection_list()
            agents_details() // wallet deduct reflect when admin accept the request
          }
        } else {
          toast.error("Insufficient Balance to request")
        }
      }
    } else {
      toast.error("Sorry..Unable to send request.")
    }
  }

  // const agent_paid_amount = async () => {
  //   let amount = Number(agentsDetails.wallet) - Number(transactionAmount.target.value)
  //   let body = {
  //     agent_id: id,
  //     amount: amount,
  //   }
  //   let result = await postApiCall(base.agentPaidAmount, body)
  //   if (result.status == true) {
  //     agents_details()
  //   } else {
  //     alert("err")
  //   }
  // }

  // const wallet_action = async () => {
  //   console.log(
  //     "wallet_action_log_",
  //     transactionAmount.target.value.length,
  //     transactionRemarks.target.value.length,
  //   )
  //   // if (transactionAmount.target.value.length == 0) {
  //   //   console.log('Transaction Amount is Mandatory')
  //   // } else if (transactionRemarks.target.value.length == 0) {
  //   //   console.log('Transaction Remarks is Mandatory')
  //   //   // } else if (transactionType == '') {
  //   //   //   console.log('Transaction Type is Mandatory')
  //   // } else {
  //   let req = {
  //     agentId: id,
  //     transactionType: transactionType,
  //     remarks: transactionRemarks.target.value,
  //     amount: transactionAmount.target.value,
  //   }
  //   console.log("walletactionreqlog", req)
  //   let result = await postApiCall(base.walletAction, req)
  //   console.log("walletactionresultlog", result)
  //   if (result.status == true) {
  //     clearFormInput()
  //     agents_details()
  //     console.log("Record Saved Successfully.!!")
  //     // alert('Record Saved Successfully.!!')
  //   }
  //   // }
  // }

  const clearFormInput = async () => {
    setTransactionType("")
    setTransactionAmount("")
    setTransactionRemarks("")
  }

  return (
    <>
      <ToastContainer />
      <CRow className="wallent-agent">
        <div className="wallet-amount">
          <CModalTitle>Wallet Balance : </CModalTitle>
          <CModalTitle> {agentsDetails.wallet}</CModalTitle>
        </div>
        <CRow className="send-money">
          <CCol xs={12}>
            <CModalTitle>Request Amount for Admin</CModalTitle>
            <CModalBody>
              <CForm>
                <CFormLabel>Amount</CFormLabel>
                <CFormInput
                  type="number"
                  id="amount"
                  placeholder="00"
                  onChange={(e) => {
                    setRequestedAmount(e.target.value)
                  }}
                  defaultValue={requestedAmount}
                />
                <CFormLabel>Remarks</CFormLabel>
                <CFormInput
                  type="text"
                  id="remarks"
                  placeholder="Transaction Remarks"
                  onChange={(e) => {
                    setRequestedRemarks(e.target.value)
                  }}
                  defaultValue={requestedRemarks}
                />
                <CButton
                  onClick={() => {
                    agents_debit_request()
                  }}
                >
                  Submit
                </CButton>
              </CForm>
            </CModalBody>
          </CCol>
        </CRow>
        <CModalTitle>Wallet Transaction</CModalTitle>
        {agentsTransaction?.map((item, index) => {
          // console.log("itemmm", item)
          return (
            <CRow className="transection" key={index}>
              <CRow className="trans-inner">
                {/* <CCol xs={6} sm={12}> */}
                <CCol xs={12} md={6}>
                  <CModalTitle>#id : {item.payment_id}</CModalTitle>
                  <CModalTitle>Amount : {item.amount}</CModalTitle>
                  <CModalTitle>Admin Remark Date : {item.admin_remark}</CModalTitle>
                </CCol>
                <CCol xs={12} md={6}>
                  <CModalTitle>Requested Date : {item.create_at}</CModalTitle>
                  <CModalTitle>Transaction Type : {item.type_cr_dr}</CModalTitle>
                  <CModalTitle>Status : {item.status}</CModalTitle>
                  {/* <CModalTitle
                    className={
                      item.status == "Pending"
                        ? "pending-status-container"
                        : "success-status-container"
                    }
                  >
                    Status : {item.status == "Pending" && "Requested/Processing"}
                  </CModalTitle> */}
                </CCol>
                <CCol xs={6}></CCol>
              </CRow>
            </CRow>
          )
        })}
      </CRow>
    </>
  )
}
export default AgentTransaction
