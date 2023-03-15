import { FC, ReactElement, ReactNode } from "react";

interface AhListProps {
    children: ReactNode,
    className?: string
}

const AhList: FC<AhListProps> = ({ children, className }): ReactElement => {
    return (
        <ul className={className}>
            {children}
        </ul>
    )
}

export default AhList