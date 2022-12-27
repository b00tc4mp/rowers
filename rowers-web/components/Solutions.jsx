import Image from "next/image";

export default function Solutions() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="font-Lato font-bold text-white text-4xl ">
        Nuestras principales soluciones
      </h2>
      <div className="flex flex-wrap xl:flex-nowrap gap-5 mt-10">
        <div className=" flex flex-col items-center gap-11">
          <Image
            alt="solution"
            src="/sol1.png"
            width={111}
            height={120}
            layout="responsive"
            placeholder="empty"
          />
          <p className="font-Lato font-ligth text-white text-center text-xl">
            Aumenta tu rentabilidad en un 10% al comprar Ads en Pesos argentinos
            (AR$)
          </p>
        </div>
        <div className=" flex flex-col items-center gap-11">
          <Image
            className="mt-6"
            alt="solution"
            src="/sol2.png"
            width={111}
            height={120}
            layout="responsive"
            placeholder="empty"
          />
          <p className="font-Lato font-ligth text-white text-center text-xl">
            Dispone de más de 2M€ mensuales para aprovechar al máximo en tus
            campañas
          </p>
        </div>
        <div className=" flex flex-col items-center gap-11">
          <Image
            alt="solution"
            src="/sol3.png"
            width={111}
            height={112}
            layout="responsive"
            placeholder="empty"
          />
          <p className="font-Lato font-ligth text-white text-center text-xl">
            Puja en más divisas y mejora el ROAS de tus campañas publicitarias
          </p>
        </div>
        <div className=" flex flex-col items-center gap-11">
          <Image
            alt="solution"
            src="/sol4.png"
            width={111}
            height={113}
            layout="responsive"
            placeholder="empty"
          />
          <p className="font-Lato font-ligth text-white text-center text-xl">
            Mejora el retorno de tus inversiones con el riesgo del tipo de
            cambio bajo control
          </p>
        </div>
      </div>
      <div className="flex flex-wrap xl:flex-nowrap gap-10 xl:gap-40 mt-10 mb-16">
        <Image
          alt="solution"
          src="/ad1.png"
          width={111}
          height={77}
          layout="responsive"
          placeholder="empty"
        />
        <Image
          alt="solution"
          src="/ad2.png"
          width={111}
          height={77}
          layout="responsive"
          placeholder="empty"
        />
        <Image
          alt="solution"
          src="/ad3.png"
          width={111}
          height={77}
          layout="responsive"
          placeholder="empty"
        />
        <Image
          alt="solution"
          src="/ad4.png"
          width={130}
          height={20}
          layout="responsive"
          placeholder="empty"
        />
      </div>
    </div>
  );
}
