import { MdAttractions, MdHotel } from 'react-icons/md'
import { FaTelegramPlane, FaCar} from 'react-icons/fa'

const NavbarLinks = [
    {
        name: "Flight",
        to: "/flight",
        icon: <FaTelegramPlane />,
    },
    {
        name: "Stays",
        to: "/stays",
        icon: <MdHotel />,
    },
    {
        name: "Attraction",
        to: "/attraction",
        icon: <MdAttractions />,
    },
    {
        name: "Car Rental",
        to: "/rentcar",
        icon: <FaCar />,
    },

];

export default NavbarLinks;