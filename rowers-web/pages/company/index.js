import Company from "../../components/company";
import Image from "next/image";
import Link from "next/link";
import Who from "../../components/who";

export default function company() {
  return (
    <div className="font-lato">
      <div className="bg-rw-main px-44 pb-40">
        <div className="flex justify-between mx-4">
        <Link href="/">
          <Image
            alt="logo"
            src="/Logo.png"
            width={241}
            height={99}
            layout="responsive"
            placeholder="empty"
          />
          </Link>
          <div>
            
              <button className="mx-2 text-white underline decoration-2 underline-offset-8">
                Compañia
              </button>
            
            <button className="w-40 h-16 bg-rw-light text-white">
              Contactanos
            </button>
          </div>
        </div>
        <Company />
      </div>
      <Who/>
    </div>
  );
}
