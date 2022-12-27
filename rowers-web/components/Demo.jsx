import { useState } from "react"
export default function Demo() {
    const [controls, setControls] = useState(false)
    const [option, setOption] = useState()


    const handleOption = (option) => {
        if (option == 'Otro') { setControls(!controls) }
        if (controls && option != 'Otro'){setControls(!controls)}
        setOption(option)
    }


    return <div>
        <h2>Solicitar una demo</h2>
        <form>
            <label>Nombre</label>
            <input type='text' name='username' placeholder='username' />

            <label>Apellido</label>
            <input type='text' name='username' placeholder='username' />

            <label>Email</label>
            <input type='email' name='email' placeholder='email' />

            <label>¿Cómo nos has conocido?</label>
            <select name="howToKnowAboutUs" onChange={(event) => handleOption(event.target.value)}>
                <option>linkedId</option>
                <option>Google Search</option>
                <option>Referido</option>
                <option>Otro</option>
            </select>

            {controls ? <div>
                <label>Cuentanos como</label>
                <input type='text' name='otro' />
            </div> :
                <></>}

            <label>Compañia</label>
        </form>
    </div>

}