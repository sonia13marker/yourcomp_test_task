import { useState } from "react";

const AccountIcon = () => {

    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
      };
    
      const handleMouseLeave = () => {
        setHovered(false);
      };
    
      const handleMouseDown = () => {
        setActive(true);
      };
    
      const handleMouseUp = () => {
        setActive(false);
      };

    return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onMouseDown={handleMouseDown}
    onMouseUp={handleMouseUp}
    >
<path d="M10.0001 1.66675C5.39758 1.66675 1.66675 5.39758 1.66675 10.0001C1.66675 14.6026 5.39758 18.3334 10.0001 18.3334C14.6026 18.3334 18.3334 14.6026 18.3334 10.0001C18.3334 5.39758 14.6026 1.66675 10.0001 1.66675Z" stroke="#1890FF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.55933 15.2883C3.55933 15.2883 5.41683 12.9167 10.0002 12.9167C14.5835 12.9167 16.4418 15.2883 16.4418 15.2883M10.0002 10C10.6632 10 11.2991 9.73661 11.7679 9.26777C12.2368 8.79893 12.5002 8.16304 12.5002 7.5C12.5002 6.83696 12.2368 6.20107 11.7679 5.73223C11.2991 5.26339 10.6632 5 10.0002 5C9.33712 5 8.70123 5.26339 8.23239 5.73223C7.76355 6.20107 7.50016 6.83696 7.50016 7.5C7.50016 8.16304 7.76355 8.79893 8.23239 9.26777C8.70123 9.73661 9.33712 10 10.0002 10Z" stroke={active ? "#FFFFFF" : (hovered ? "#096DD9" : "#1890FF")} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

}

export default AccountIcon;