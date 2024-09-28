import { useState } from 'react'
import './myip.css'
function FindMyIP(props) {

    const [data, setData] = useState('')

    async function getDetails() {
        let response = await fetch('https://ipapi.co/json/')

        if (response.ok) {
            const result = await response.json()
            setData(result)
            console.log(result)
        }
    }


    return (
        <div className='container'>
            <div className='card'>
                <button
                    className='btn'
                    onClick={getDetails}
                >
                    What is my IP
                </button>
                {data &&
                    (
                        <>
                            <ul className='list'>
                                <li><span><i className="fa fa-globe"></i></span>IP:  {data?.ip}</li>
                                <li><span><i className="fa fa-map-marker"></i></span>City:  {data?.city}</li>
                                <li><span><i className="fa fa-building"></i></span>Region:  {data?.region}</li>
                                <li><span><i className="fa fa-flag"></i></span>Country:  {data?.country_name}</li>
                                <li><span><i className="fa fa-qrcode"></i></span>Country Code:  {data?.country_code}</li>
                                <li><span><i className="fa fa-university"></i></span>Capital:  {data?.country_capital}</li>
                                <li><span><i className="fa fa-clock-o" aria-hidden="true"></i></span>Timezone:  {data?.country_capital}</li>
                                <li><span><i className="fa fa-usd" aria-hidden="true"></i></span>Currency:  {data?.currency}</li>
                                <li><span><i className="fa fa-users" aria-hidden="true"></i></span>Population:  {data?.country_population}</li>
                            </ul>
                        </>
                    )
                }

            </div>
        </div>
    )
}
export default FindMyIP