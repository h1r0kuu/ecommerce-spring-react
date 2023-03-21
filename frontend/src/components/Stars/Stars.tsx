import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC, ReactElement } from "react"

interface StarsProps {
    stars: number
}

const Stars: FC<StarsProps> = ({ stars }): ReactElement => {
    const fullStars = Math.floor(stars);
    const hasHalfStar = (stars % 1 !== 0);
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const starIcons = [];
    for (let i = 0; i < fullStars; i++) {
        starIcons.push(<FontAwesomeIcon key={i} icon={faStar} className="text-warning" />)
    }
    if (hasHalfStar) {
        starIcons.push(<FontAwesomeIcon key={fullStars} icon={faStarHalfAlt} className="text-warning" />)
    }
    for (let i = 0; i < emptyStars; i++) {
        starIcons.push(<FontAwesomeIcon key={fullStars + i + (hasHalfStar ? 1 : 0)} icon={faStar} className="text-secondary" />)
    }

    return (
        <>
            {starIcons}
        </>
    )
}

export default Stars