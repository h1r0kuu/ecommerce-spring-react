import { FC, ReactElement } from "react";
import SubMegaMenuContent from "./SubMegaMenuContent/SubMegaMenuContent";

interface MegaMenuContentProps {
    item: any,
    activeDropdownIndex: number,
    isDropdownOpen: (activeDropdownIndex: number) => string,
}

interface RowItemsProps {
    items: any[]
}

const RowItems: FC<RowItemsProps> = ({ items }): ReactElement => {
    return (
        <>
            <div className="row">
                {items.map((item, index) => (
                    <SubMegaMenuContent title={item.title} subMenu={item.subMenu} key={index} />
                ))}
            </div>
            <br />
        </>
    )
}

const MegaMenuContent: FC<MegaMenuContentProps> = (props): ReactElement => {

    const rows = [];

    for (let i = 0; i < props.item.subMenu.length; i += 4) {
        const rowItems = props.item.subMenu.slice(i, i + 4);
        rows.push(<RowItems items={rowItems} key={i} />);
    }

    return (
        <div className={`mega-menu-content ${props.isDropdownOpen(props.activeDropdownIndex)} `}>
            {props.item.banners.length > 0 &&
                <>
                    <div className="row">
                        {props.item.banners.map((banner: any, index: number) => (
                            <div className="col-lg-4 mega-image" key={index}>
                                <div className="mega-banner">
                                    <a className="u-d-block" href="shop-side-version-2.html">
                                        <img className="u-img-fluid u-d-block" src={banner.src} alt="" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <br />
                </>
            }
            {rows.length > 0 ?
                rows
                :
                <h5>No content</h5>
            }
        </div>
    )
}

export default MegaMenuContent;