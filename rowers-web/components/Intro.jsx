import Image from "next/image";

export default function Intro() {
  return (
    <div className="flex flex-wrap xl:flex-nowrap gap-24">
      <div className="mt-11 flex flex-col gap-11">
        <h2 className="font-Lato text-4xl font-bold text-white">
          Reduce costes a través de la gestión de divisas
        </h2>
        <p className="font-Lato text-2xl text-white font-light">
          Somos una fintech que ofrece soluciones a través de la gestión de
          divisas, ayudando a empresas a maximizar sus inversiones, con el
          riesgo del tipo de cambio bajo control
        </p>
      </div>
      <Image className=""
        alt="how"
        src="/how2.png"
        width={550}
        height={358.02}
        layout="responsive"
        placeholder="empty"
      />
    </div>
  );
}
