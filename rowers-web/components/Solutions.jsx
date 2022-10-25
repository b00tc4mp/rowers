import Image from 'next/image'

export default function Solutions() {

    return <div>
        <h2>Alguna e nuestras principales soluciones son:</h2>
        <Image
            alt='ads company'
            src='/solutions.png'
            width={526}
            height={179}
            layout='responsive'
            placeholder='empty'
        />
    </div>
}