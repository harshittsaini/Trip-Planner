import { useState } from 'react';

function Cards({id, name, info, image, price, removeTour}){

    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}...`;

    function readmoreHandler(){
        setReadmore(!readmore);
    }

    return (
        <div className="card">

            <div className='info'>
                <img src={image} className="image" alt='img'></img>
                <h4 className="price">₹ {price}</h4>
                <h4 className="name">{name}</h4>
                <div className='description'>
                    {description}
                    {/* <h1>Hello</h1> */}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less` : `Read More`}
                    </span>
                </div>
            </div>

            <button className='click-btn' onClick={() => removeTour(id)}>
                Not Intrested
            </button>
        </div>
    )
}

export default Cards;