import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./FooterStyle.css"
export default function Footer(){
return(
    <div className="Footer">
        <div className="top">
            <div>
                <h1>Event</h1>
                <p>your event planner at your screen</p>
            </div>
            <div>
                <a href="/">
                 <FacebookIcon/>
                </a>
                <a href="/">
                 <InstagramIcon/>
                </a>
                <a href="/">
                 <TwitterIcon/>
                </a>
                <a href="/">
                 <LinkedInIcon/>
                </a>
            </div>
        </div>
        <div className="bottom">
        <div>
            <h4>Projects</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All versions</a>
           
        </div>
        <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/">Contact us</a>
           
           
        </div>
        <div>
            <h4>Community</h4>
            <a href="/">Github</a>
            <a href="/">Issues</a>
            <a href="/">Twitter</a>
           
        </div>
        <div>
            <h4>Other</h4>
            <a href="/">Treams of service</a>
            <a href="/">privecy policy</a>
            <a href="/">License</a>
           
        </div>
        </div>
    </div>
);
}