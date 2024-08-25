import React from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Toast = () => {
  toast.success("Success !", {
    position: toast.POSITION.TOP_RIGHT,
  })
  return (
    <div>
      {/* <button onClick={showToastMessage}>Notify</button> */}
      {console.log("hgjklasdfgasd")}
      <ToastContainer />
    </div>
  )
}

export default Toast
