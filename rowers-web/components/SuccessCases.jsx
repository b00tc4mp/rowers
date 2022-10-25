import Image from 'next/image'

export default function SuccessCases() {

    return <div>
        <h2>Casos de Exito</h2>
        <Image
            alt='success cases'
            src='/successCases.png'
            width={560}
            height={216}
            layout='responsive'
            placeholder='empty'
        />
    </div>
}