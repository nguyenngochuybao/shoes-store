import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function UserInfo ()
{
    const dispatch = useDispatch();
    const user = useSelector( ( state ) => state.user?.registerData ); 
    console.log( "123",user );

    return (
        <div className="userInfo-page">
            <div className="container">
                <div className="userInfo">
                    <div className="form-userInfo">
                        <div className="userInfo-left">
                            <div className="userInfo-avt">
                            </div>
                        </div>
                        <div className="userInfo-right">
                            <div className="userInfo-inp">
                                <ul className="left">
                                    <li><b>{user.name }</b></li>
                                    <li><p>
                                        Email:
                                    </p></li>
                                    <li><p>Số điện thoại:</p></li>
                                    <li><p>Tên đăng nhập:</p></li>
                                    <li><p>PassWord:</p></li>
                                </ul>
                    
                                <ul className="right">
                                    <li>
                                         <br />
                                    </li>
                                    <li>
                                        <input type="text"  />
                                    </li>
                                    <li>
                                        <input type="text" />
                                    </li>
                                    <li>
                                        <input type="text" />
                                    </li>
                                    <li>
                                        <input type="text"  />
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInfo; 