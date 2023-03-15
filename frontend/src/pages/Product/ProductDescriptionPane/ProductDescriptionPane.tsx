import { ReactElement } from "react";

const ProductDescriptionPane = (): ReactElement => {
    return (
        <div className="tab-pane active show" id="pd-desc">
            <div className="pd-tab__desc">
                <div className="u-s-m-b-15">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the
                        1960s with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem
                        Ipsum.
                    </p>
                </div>
                <div className="u-s-m-b-30">
                    <div className="fluid-width-video-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/qKqSBm07KZk"
                            name="fitvid0"
                        />
                    </div>
                </div>
                <div className="u-s-m-b-30">
                    <ul>
                        <li>
                            <i className="fas fa-check u-s-m-r-8" />
                            <span>Buyer Protection.</span>
                        </li>
                        <li>
                            <i className="fas fa-check u-s-m-r-8" />
                            <span>
                                Full Refund if you don't receive your order.
                            </span>
                        </li>
                        <li>
                            <i className="fas fa-check u-s-m-r-8" />
                            <span>
                                Returns accepted if product not as described.
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="u-s-m-b-15">
                    <h4>PRODUCT INFORMATION</h4>
                </div>
                <div className="u-s-m-b-15">
                    <div className="pd-table gl-scroll">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Main Material</td>
                                    <td>Cotton</td>
                                </tr>
                                <tr>
                                    <td>Color</td>
                                    <td>Green, Blue, Red</td>
                                </tr>
                                <tr>
                                    <td>Sleeves</td>
                                    <td>Long Sleeve</td>
                                </tr>
                                <tr>
                                    <td>Top Fit</td>
                                    <td>Regular</td>
                                </tr>
                                <tr>
                                    <td>Print</td>
                                    <td>Not Printed</td>
                                </tr>
                                <tr>
                                    <td>Neck</td>
                                    <td>Round Neck</td>
                                </tr>
                                <tr>
                                    <td>Pieces Count</td>
                                    <td>1 Piece</td>
                                </tr>
                                <tr>
                                    <td>Occasion</td>
                                    <td>Casual</td>
                                </tr>
                                <tr>
                                    <td>Shipping Weight (kg)</td>
                                    <td>0.5</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDescriptionPane;