import React ,{useState} from 'react'


const Wedding=() =>{
    const [wedding,setWedding] = useState({
        userName:'Demo',
        Groom:'Guy',
        Bride : 'Girl',
        Date : 'Date',
        location : 'location',
        
    })

    return (
        <div>
            <div className="container"><h2> {wedding.Groom} & {wedding.Bride} </h2> 
                <h4> Getting Married on {wedding.Date} </h4>
                <h5> & Lives Happily Ever after</h5> 
            
            </div>
        </div>
    )
}

export default Wedding;