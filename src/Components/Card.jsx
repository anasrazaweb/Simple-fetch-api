import React, { useEffect, useState } from 'react'
import './../App.css'
const Card = () => {
    const [ApiData, setApiData] = useState([]);

    const getuser = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
        setApiData(await response.json());
    };

    useEffect(() => {
        getuser();
    }, []);
    return (
        <div>
            <div  style={{display: "flex", flexWrap: "wrap", gap: "30px", flexDirection: "row"}}>
                {ApiData.map((item, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <div class="ag-format-container">
                                    <div class="ag-courses_box">
                                        <div class="ag-courses_item">
                                            <div class="ag-courses-item_link">
                                                <div class="ag-courses-item_bg"></div>
                                                <div class="ag-courses-item_title">
                                                    <div className='card'>
                                                        <div className="">
                                                            <img
                                                                className='img-avatar-box'
                                                                src={item.url}
                                                            />
                                                        </div>
                                                        <div>
                                                            <h4>{item.title}</h4>
                                                            <div className='count-comm'>
                                                                <div style={{ textAlign: "center" }}>
                                                                    <label htmlFor="">Rating</label>
                                                                    <p>20</p>
                                                                </div>

                                                                <div style={{ textAlign: "center" }}>
                                                                    <label htmlFor="">Articles</label>
                                                                    <p>20</p>
                                                                </div>

                                                                <div style={{ textAlign: "center" }}>
                                                                    <label htmlFor="">Follower</label>
                                                                    <p>20</p>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Card