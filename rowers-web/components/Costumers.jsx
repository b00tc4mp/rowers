import Image from "next/image"
export default function Costumers (){

    return <div className="flex flex-col items-center text-center px-10 xl:px-44">
        <h2 className="font-Lato font-bold text-rw-main text-4xl mt-28 mb-11">Algunos de nuestros clientes</h2>
        <Image
            alt='Costumers'
            src='/Costumers.png'
            width={1089}
            height={216}
            layout='responsive'
            placeholder='empty'
            />
    </div>    
    
    }