import { ReactElement } from "react"
import { Placeholder } from "react-bootstrap"
import { Link } from "react-router-dom"
import { HOME } from "../../../../utils/pathConstants"

const Logo = (): ReactElement => {
    return (

        <Link to={HOME} className="float-start">
            <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="35" />
        </Link>
    )
}

export default Logo