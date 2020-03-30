import React ,{useState, useEffect} from 'react'


const Wedding=({match}) =>{
    const [wedding,setWedding] = useState({
        userName:'Demo',
        Groom:'Guy',
        Bride : 'Girl',
        Date : 'Date',
        location : 'location',
        
    })

    useEffect(()=>{
        console.log(match.params.wlink);
    })

    return (
        <div>
            <div className="container"><h2> {wedding.Groom} & {wedding.Bride} </h2> 
                <h4> Getting Married on {wedding.Date} </h4>
                <h5> & Lives Happily Ever after </h5> 
            
            </div>
        </div>
    )
}

export default Wedding;