import { useState } from "react";
import Image from "next/image";

export default function How() {
  const [pago, setPago] = useState(1000);

  const savePago = (pago) => {
    setPago(parseFloat(pago));
  };

  return (
    <div>
      <div className="flex flex-col items-center px-10 xl:px-44">
        <h2 className="font-Lato font-bold text-rw-main text-4xl mt-32 mb-11">
          ¿Cómo lo hacemos?
        </h2>
        <p className="text-rw-main font-lato text-xl text-center">
          Te ofrecemos una propuesta integral de Migración y Optimización de tus
          campañas en tan sólo 3 pasos con un sólo objetivo: maximizar el
          Retorno de Inversión de tus campañas.
        </p>
        <Image className="mt-16 hidden xl:block"
            alt='line'
            src='/line.png'
            width={754}
            height={20}
            layout='responsive'
            placeholder='empty'
        />
        <div className="flex flex-wrap items-center place-content-center gap-3">
          <div className="flex flex-col items-center">
            <h3 className="text-rw-cyan text-2xl mb-16 mt-16">Diagnóstico</h3>
            <div className="w-[347px] h-[574px] bg-rw-main p-7 text-xl text-white">
              <p className="mb-7">
                Realizaremos un diagnóstico para la migración de tus campañas,
                basándonos en data análisis y experiencia, que te permitirán
                tomar decisiones más inteligentes y rentables.
              </p>

              <p>
                El <span className="text-rw-cyan">Diagnóstico</span> incluye:
              </p>
              <ul className="list-disc pl-7 pt-4">
                <li>Auditoría de las campañas.</li>
                <li>Propuestas de migración.</li>
                <li>
                  Un plan de acción progesivo con el objetivo de mantener la
                  conversión y no perjudicar la performance
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-rw-cyan text-2xl mb-16 mt-16">Migración</h3>
            <div className="w-[347px] h-[574px] bg-rw-main p-7 text-xl text-white">
              <p className="mb-7">
                Un equipo de especialistas migrará tus campañas, detectando
                factores y propuestas de mejoras para cumplir con tus objetivos.
              </p>

              <p>
                La <span className="text-rw-cyan">Migración</span> incluye:
              </p>
              <ul className="list-disc pl-7 pt-4">
                <li>
                  Migración de campañas en su nueva cuenta de Google Ads y
                  Facebook Ads.
                </li>
                <li>
                  Implementación de píxeles y conversiones online de Google ads
                  y FB a través de GTM.
                </li>
                <li>
                  Creación de cuentas nuevas en Google ads y FB Ads (72 hs
                  hábiles).
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-rw-cyan text-2xl mb-16 mt-16">Reporting</h3>
            <div className="w-[347px] h-[574px] bg-rw-main p-7 text-xl text-white">
              <p className="mb-7">
                Creemos en la mejora constante, por eso te daremos acceso a
                reportes y alertas para tengas el control total de tus campañas.
              </p>

              <p>
                El <span className="text-rw-cyan">Reporting</span> incluye:
              </p>
              <ul className="list-disc pl-7 pt-4">
                <li>
                  Tablero DataStudio con información de consumo y resultados en
                  su moneda local.
                </li>
                <li>Alertas de consumo semanal por e-mail.</li>
                <li>
                  Definición de periodicidad de reuniones de reporting según
                  cada caso específico.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col border rounded-md border-rw-main mt-6 p-3 mx-10 xl:mx-44">
        <label className="text-rw-main text-xl leading-10">Pago recibido (USD)</label>
        <div className="flex gap-2">
          <span>$ </span>
          <input
            className="border rounded-md border-rw-main w-full"
            type="number"
            name="pago"
            defaultValue={10000}
            onChange={(event) => {
              savePago(event.target.value);
            }}
          ></input>
          <span> $</span>
        </div>

        <label className="text-rw-main font-bold text-xl leading-10">Consumo en Google Ads (USD)</label>
        <span className="text-rw-cyan font-bold text-xl leading-10">{pago ? pago * (1.1).toFixed(2) : 0}</span>

        <label className="text-rw-main font-bold text-xl leading-10">ROI</label>
        <span className="text-rw-cyan font-bold text-xl leading-10">10%</span>

        <label className="text-rw-main font-bold text-xl leading-10">Bonificación (USD)</label>
        <span className="text-rw-cyan font-bold text-xl leading-10">{pago ? pago * (0.1).toFixed(2) : 0}</span>
      </div>
    </div>
  );
}

