import Image from "next/image";
import Link from "next/link";

const Card = ({ country }) => {
  return (
    <Link href={`/${country.alpha3Code.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '')}`} className={`max-w-[240px] h-[300px] bg-white dark:bg-main rounded grid grid-rows-2 shadow-lg grow basis-[200] border dark:border-none`}>
      <div>
        <Image
          src={country.flag}
          width={0}
          height={0}
          alt="flag"
          className="object-cover h-full rounded-t w-full"
        />
      </div>

      <div className="pt-5 pl-5">
        <h3 className="text-black dark:text-white text-[20px] font-[600] mb-3">{country.name.length > 19 ? country.name.slice(0, 17) + "..." : country.name}</h3>
        <div>
        <p className="text-black dark:text-white text-[15px] font-[400]">Population: <span className="opacity-85">{country.population}</span></p>
        <p className="text-black dark:text-white text-[15px] font-[400]">Region: <span className="opacity-85">{country.region}</span></p>
        <p className="text-black dark:text-white text-[15px] font-[400]">Capital: <span className="opacity-85">{country.capital}</span></p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
