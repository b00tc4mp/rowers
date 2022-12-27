import Image from 'next/image'

export default function SuccessCases() {

    return <div className="flex flex-col items-center text-center px-10 xl:px-44">
        <h2 className="font-Lato font-bold text-rw-main text-4xl mt-28 mb-11">Casos de Exito</h2>
        <Image
            alt='success cases'
            src='/Success.png'
            width={1080}
            height={402}
            layout='responsive'
            placeholder='empty'
        />
    </div>
}