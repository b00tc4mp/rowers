import Image from "next/image";

export default function Company() {
  return (
    <div className="flex gap-24">
      <div className="mt-11 flex flex-col gap-11">
        <h2 className="font-Lato text-4xl font-bold text-white">
          Acerca de Rowers
        </h2>
        <p className="font-Lato text-2xl text-white font-light">
          Somos una fintech con mas de 7 años de experiencia en la gestion de
          divisas para para la industria Digital. Con oficinas en España, USA y
          Latinoamerica.
        </p>
        <button className="w-40 h-16 bg-rw-light text-white">
          Contactanos
        </button>
      </div>
      <Image
        className=""
        alt="world"
        src="/world.png"
        width={550}
        height={358.02}
        layout="responsive"
        placeholder="empty"
      />
    </div>
  );
}
