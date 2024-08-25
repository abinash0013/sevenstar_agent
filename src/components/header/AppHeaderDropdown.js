import React, { useEffect, useState } from "react"
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react"
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from "@coreui/icons"
import CIcon from "@coreui/icons-react"

import avatar8 from "./../../assets/images/avatars/8.jpg"
import { useNavigate } from "react-router-dom"

const AppHeaderDropdown = () => {
  const navigate = useNavigate()
  const [loginId, setLoginId] = useState("")

  useEffect(() => {
    const sessionData = async () => {
      const loggedInUser = await localStorage.getItem("agentLoginId")
      console.log("loggedInUserr", loggedInUser)
      setLoginId(loggedInUser)
      if (loggedInUser == null || loggedInUser == "") {
        navigate("/login")
      } else {
      }
    }
    sessionData()
  }, [])

  const clearLocalStorageItem = async () => {
    // Remove a specific item from localStorage
    const sessionClear = await localStorage.removeItem("agentLoginId")
    console.log("sessionClearrr", sessionClear)
    if (sessionClear == undefined || sessionClear == null || sessionClear == "") {
      navigate("/login")
    }
  }
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0 pb-0" placement="bottom-end">
        {/* <CDropdownHeader className='bg-light fw-semibold py-2'>Account</CDropdownHeader>
        <CDropdownItem href='#'>
          <CIcon icon={cilBell} className='me-2' />
          Updates
          <CBadge color='info' className='ms-2'>
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href='#'>
          <CIcon icon={cilEnvelopeOpen} className='me-2' />
          Messages
          <CBadge color='success' className='ms-2'>
            42
          </CBadge>
        </CDropdownItem> */}
        {/* <CDropdownItem href='#'>
          <CIcon icon={cilTask} className='me-2' />
          Tasks
          <CBadge color='danger' className='ms-2'>
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href='#'>
          <CIcon icon={cilCommentSquare} className='me-2' />
          Comments
          <CBadge color='warning' className='ms-2'>
            42
          </CBadge>
        </CDropdownItem> */}
        {/* <CDropdownHeader className='bg-light fw-semibold py-2'>Settings</CDropdownHeader>
        <CDropdownItem href='#'>
          <CIcon icon={cilUser} className='me-2' />
          Profile
        </CDropdownItem>
        <CDropdownItem href='#'>
          <CIcon icon={cilCreditCard} className='me-2' />
          Payments
          <CBadge color='secondary' className='ms-2'>
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href='#'>
          <CIcon icon={cilFile} className='me-2' />
          Projects
          <CBadge color='primary' className='ms-2'>
            42
          </CBadge>
        </CDropdownItem>*/}
        {/* <CDropdownDivider /> */}

        <CDropdownItem onClick={() => clearLocalStorageItem()}>
          <CIcon icon={cilSettings} className="me-2 mt-2 mb-0" />
          Logout
        </CDropdownItem>
        {/* <CDropdownItem href='#'>
          <CIcon icon={cilLockLocked} className='me-2' />
          Logout
        </CDropdownItem> */}
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
