import React from 'react';
// Style
import './SideBarOption.css';
import './SideBar.css';
// Import
import SideBarOption from './SideBarOption';
// Import Icons
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// Import Button
import { Button } from '@material-ui/core';

function SideBar() {
    return (
        <div className="sidebar">
            {/* Twitter Icon */}
            <TwitterIcon className="sidebar__twitterIcon" />
            {/* Options */}
            <SideBarOption Icon={HomeIcon} text="Home" active={true} />
            <SideBarOption Icon={SearchIcon} text="Explore" />
            <SideBarOption Icon={NotificationsNoneIcon} text="Notifications" />
            <SideBarOption Icon={MailOutlineIcon} text="Messages" />
            <SideBarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SideBarOption Icon={ListAltIcon} text="Lists" />
            <SideBarOption Icon={PermIdentityIcon} text="Profile" />
            <SideBarOption Icon={MoreHorizIcon} text="More" />
            {/* Write Tweet */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>
                Tweet
            </Button>
        </div>
    );
}

export default SideBar;
