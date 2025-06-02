import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";


function Categories ()
{

    const dispatch = useDispatch();
    const categories = useSelector( ( state ) => state.product?.Products || [] );


    return (
        <>
            <div className="categories">
                <div className="small-container" >
                    <div className="row">
                        <div className="col-3">
                            <img src="" alt="" />
                        </div>
                        <div className="col-3">
                            <img src="" alt="" />
                        </div>
                        <div className="col-3">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="small-container">
                <h2 className="title">
                    Featured Products
                </h2>
                <div className="row">
                    {
                        categories.map( ( item, index ) => (
                            <Link to={ `/about/${ item.id }` } className="col-4" key={ index }>
                                <a href=""><img src={ item.image } /></a>
                                <a href="">
                                    <h4>{ item.name }</h4>
                                </a>
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                </div>
                                <p>{ item.price }</p>
                            </Link>
                        ) )
                    }
                </div>
            </div>
            <div className="offer">
                <div className="small-container">
                    <div className="row">
                        <div className="col-2">
                            <a href=""> <img src="https://static.messi.com/wp-content/uploads/2021/09/Messi-silueta-1.png" alt="" className="off-img" /></a>
                        </div>
                        <div className="col-2">
                            <p>Exclusively Available on RedStore</p>
                            <h1>Smart Band 4 </h1>
                            <small>The Mi Smart Band 4 Features a 39.9% Larger (than Mi Band 3) AMOLED color
                                full-touch display with adjustable brightness, so everything is clear as can be.
                            </small>
                            <a href="" className="btn">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial">
                <div className="small-container">
                    <div className="row">
                        <div className="col-3">
                            <i class="fa fa-quote-left"></i>
                            <p>đánh giá</p>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <img src="" alt="" />
                            <h3>Tên của bạn</h3>
                        </div>
                        <div className="col-3">
                            <i class="fa fa-quote-left"></i>
                            <p>đánh giá</p>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <img src="" alt="" />
                            <h3>Tên của bạn</h3>
                        </div>
                        <div className="col-3">
                            <i class="fa fa-quote-left"></i>
                            <p>đánh giá</p>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <img src="" alt="" />
                            <h3>Tên của bạn</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="brands">
                <div className="small-container">
                    <div className="row">
                        <div className="col-5">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Godrej_Logo.svg/2560px-Godrej_Logo.svg.png" alt="" />
                        </div>
                        <div className="col-5">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png" alt="" />
                        </div>
                        <div className="col-5">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/OPPO_LOGO_2019.svg/1280px-OPPO_LOGO_2019.svg.png" alt="" />
                        </div>
                        <div className="col-5">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Pepsi_logo_2008.svg" alt="" />
                        </div>
                        <div className="col-5">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/1280px-PayPal_logo.svg.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Categories;