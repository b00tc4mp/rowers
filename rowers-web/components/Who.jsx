import Image from "next/image";

export default function Who() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="font-Lato font-bold text-rw-main text-4xl mt-32 mb-11">
        Quiénes somos
      </h2>
      <div className="flex gap-52 mt-10">
        <div className=" flex flex-col items-center gap-2.5">
          <Image
            alt="paz"
            src="/paz.png"
            width={162}
            height={158}
            layout="responsive"
            placeholder="empty"
          />
          <p className="font-Lato font-ligth text-rw-cyan text-center text-sm">
            Paz Madina
          </p>
          <p className="font-Lato font-ligth text-rw-main text-center text-sm">
            Directora Comercial
          </p>
        </div>

        <div className=" flex flex-col items-center gap-2.5">
          <Image
            alt="kenneth"
            src="/kenneth.png"
            width={162}
            height={158}
            layout="responsive"
            placeholder="empty"
          />
          <p className="font-Lato font-ligth text-rw-cyan text-center text-sm">
          Kenneth Sly
          </p>
          <p className="font-Lato font-ligth text-rw-main text-center text-sm">
          Director Admionsitración y Finanzas
          </p>
        </div>

        <div className=" flex flex-col items-center gap-2.5">
          <Image
            alt="jorge"
            src="/jorge.png"
            width={162}
            height={158}
            layout="responsive"
            placeholder="empty"
          />
          <p className="font-Lato font-ligth text-rw-cyan text-center text-sm">
          Jorge Araujo Muller
          </p>
          <p className="font-Lato font-ligth text-rw-main text-center text-sm">
          Founder
          </p>
        </div>
      </div>
    </div>
  );
}
