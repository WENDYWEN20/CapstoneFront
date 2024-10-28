import {Link} from 'react-router-dom'

export default function FooterPage(){

    return(
        <div className="bg-indigo-500 md: bg-amber-300  lg:bg-violet-400 h-screeen ">
        <ul>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/return">Return Policy</Link></li>
        </ul>
        </div>
    )
}