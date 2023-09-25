import React from 'react'
import { AiOutlineHome } from "react-icons/ai"
import { MdSupervisorAccount } from "react-icons/md";
import { RiShoppingCartFill } from "react-icons/ri";
import { MdGridView } from "react-icons/md";
import { RiEditBoxFill } from "react-icons/ri";
import {RiMenu2Fill  } from "react-icons/ri";
import { MdCalendarMonth } from "react-icons/md";
import {RiSettings4Line  } from "react-icons/ri";
import {MdBackup} from "react-icons/md";
import { SlChart } from "react-icons/sl";
import {SlDoc} from "react-icons/sl";







import {MdAssignment} from "react-icons/md";
import { RiFileCopy2Line } from "react-icons/ri";



const Sidebar = () => {
  return (
    <div className='main-sidebar'>
        <ul><h6>MAIN</h6>
            <li><AiOutlineHome/>HomePage</li>
            
            <li> <MdSupervisorAccount/>Profile</li>
        </ul>

        <ul><h6>LISTS</h6>
            <li><MdSupervisorAccount/>Users</li>
            <li><RiShoppingCartFill/>Products</li>
            <li><MdAssignment/>Order</li>
            <li><RiFileCopy2Line/>Posts</li>
        </ul>

        <ul><h6>GENERAL</h6>
            <li><MdGridView/>Elements</li>
            <li><RiEditBoxFill/>Notes</li>
            <li><RiMenu2Fill/>Forms</li>
            <li><MdCalendarMonth/>Calendar</li>
        </ul>


        <ul><h6>MAINTENANCE</h6>
            <li><RiSettings4Line/>Settings</li>
            <li><MdBackup/>Backups</li>
        </ul>


        <ul><h6>ANALYTICS</h6>
            <li><SlChart/>Charts</li>
            <li><SlDoc/>Logs</li>
        </ul>
    </div>
  )
}
export default Sidebar;
