import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductRequest } from "../../redux/Action/action";
import { useNavigate } from "react-router-dom";

function About ()
{
    const getProductsState = () =>
    {
        const saved = localStorage.getItem( 'productDetail' );
        return saved ? JSON.parse( saved ) : {};
    }

    const { id } = useParams();
    const Products = useSelector( state => state.product?.Products || [] );
    const [ productState, setProductState ] = useState( getProductsState() );


    useEffect( () =>
    {
        const product = Products.find( item => item.id === Number( id ) );
        if ( product ) setProductState( product );
    }, [ id, Products ] );


    useEffect( () =>
    {
        localStorage.setItem( 'productDetail', JSON.stringify( productState ) );
    }, [ productState ] );


    const dispatch = useDispatch();

    const handleAddToCart = () =>
    {
        dispatch( addProductRequest(
            productState
        ) )
     navigate("/contact")
    }

    const navigate = useNavigate();

    return (
        <>
            <div className="small-container single-product">
                <div className="row">
                    <div className="col-2">
                        <img src={ productState?.image } alt="" id="ProductImg" />
                        <div className="small-img-row">
                            <div className="small-img-col">
                                <img src={ productState?.image } alt="" className="small-img" />
                            </div>
                            <div className="small-img-col">
                                <img src={ productState?.image } alt="" className="small-img" />
                            </div>
                            <div className="small-img-col">
                                <img src={ productState?.image } alt="" className="small-img" />
                            </div>
                            <div className="small-img-col">
                                <img src={ productState?.image } alt="" className="small-img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <p>Home/ Shoes</p>
                        <h1>{ productState?.name }</h1>
                        <h4>{ productState?.price }</h4>
                        <select>
                            <option>Select Size</option>
                            <option>XXL</option>
                            <option>XL</option>
                            <option>Large</option>
                            <option>Medium</option>
                            <option>Small</option>
                        </select>
                        <input type="number" value="1" />
                        <a href="" className="btn" onClick={ () => handleAddToCart() }>Add To Cart</a>
                        <h3>Products Details <i className="fa fa-indent"></i></h3>
                        <br />
                        <p>Tiêu đề</p>
                    </div>
                </div>
            </div>
            <div className="small-container">
                <div className="row row-2">
                    <h2>related Products</h2>
                    <p>view more</p>
                </div>
            </div>
            <div className="small-container">
                <div className="row">
                    <div className="col-4">
                        <a href=""><img src="" alt="" /></a>
                        <a href="">
                            <h4>Nemeziz 18.3</h4>
                        </a>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>400.000Đ</p>
                    </div>
                    <div className="col-4">
                        <a href=""><img src="" alt="" /></a>
                        <a href="">
                            <h4>Nemeziz 18.3</h4>
                        </a>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>400.000Đ</p>
                    </div>
                    <div className="col-4">
                        <a href=""><img src="" alt="" /></a>
                        <a href="">
                            <h4>Nemeziz 18.3</h4>
                        </a>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>400.000Đ</p>
                    </div>
                    <div className="col-4">
                        <a href=""><img src="" alt="" /></a>
                        <a href="">
                            <h4>Nemeziz 18.3</h4>
                        </a>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>400.000Đ</p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default About;