import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";

import axios from "axios";
import { getProductsRequest } from "../../redux/Action/action";

function Products ()
{
    const dispatch = useDispatch();
    const Products = useSelector( ( state ) => state.product?.Products || [] );
    console.log( "Products", Products );

    useEffect( () =>
    {
        dispatch( getProductsRequest() );
    }, [ dispatch ] );
    return (
        <div className="small-container">
            <div className="row row-2">
                <h2>All Products</h2>
                <select>
                    <option>Default Shorting</option>
                    <option>Default Shorting</option>
                    <option>Default Shorting</option>
                    <option>Default Shorting</option>
                    <option>Default Shorting</option>
                </select>
            </div>
            <div className="row">
                {
                    Products.map( ( item, index ) => (
                        <div className="col-4" key={ index }>
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
                        </div>
                    ) )
                }
            </div>
            <div className="page-btn">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>&#8594;</span>
            </div>
        </div>
    );
}


export default Products;