import { useState } from "react"
import Image from 'next/image'

export default function How (){
    const [pago, setPago]= useState()

    const savePago= (pago) =>{     
        setPago(parseFloat(pago))

    }

    return <div>
        <h2>¿Cómo lo hacemos?</h2>
        <Image
            alt='como lo hacemos'
            src='/how.png'
            width={524}
            height={247}
            layout='responsive'
            placeholder='empty'
        />
        <div>
            <label>Pago recibido (USD)</label>
        <input  type="number" name="pago" onChange={(event) => { savePago(event.target.value) }}></input>

            <label>ROI</label>
            <span>10%</span>

            <label>Consumo en Google Ads (USD)</label>
            <span>{(pago*1.1).toFixed(2)}</span>

            <label>Bonificación (USD)</label>
            <span>{pago*0.1.toFixed(2)}</span>
           
        </div>
    </div>    
    
    }