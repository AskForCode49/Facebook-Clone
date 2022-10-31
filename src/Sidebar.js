import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StoreIcon from '@material-ui/icons/Store';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{ user }, dispatch] = useStateValue()

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />

            <SidebarRow Icon={LocalHospitalIcon} title='COVID_19 Information Center' />
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow Icon={PeopleIcon} title='Friends' />
            <SidebarRow Icon={ChatIcon} title='Messenger' />
            <SidebarRow Icon={StoreIcon} title='Marketplace' />
            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
            <SidebarRow Icon={ExpandMoreIcon} title='More' />
        </div>
    )
}

export default Sidebar
