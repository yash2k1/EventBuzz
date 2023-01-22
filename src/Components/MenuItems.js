import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ContactPageIcon from '@mui/icons-material/ContactPage';

export const MenuItems=[
    {
        title: "Home",
        url:"/",
        classnames: "nav-Links",
        icon: <HomeIcon/>
    },
    {
        title: "About",
        url:"/About",
        classnames: "nav-Links",
        icon: < InfoIcon/>
    },
    {
        title: "Service",
        url:"/Service",
        classnames: "nav-Links",
        icon: <BusinessCenterIcon/>
    },
    {
        title: "Contact",
        url:"/Contact",
        classnames: "nav-Links",
        icon: <ContactPageIcon/>
    }
   
]