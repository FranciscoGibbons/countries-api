import data from "../data.json";

import LinkBtn from "../components/LinkBtn";
import Image from "next/image";

import Link from "next/link";

const Page = ({ params }) => {
  const url = params.country;

  const pageIndex = data.findIndex(
    (country) => country?.alpha3Code.toLowerCase() === url
  );

  const nextPage =
    pageIndex !== -1
      ? `/${data[pageIndex + 1]?.alpha3Code.toLowerCase()}`
      : "/"

      const previousPage =
    pageIndex !== -1
      ? `/${data[pageIndex - 1]?.alpha3Code.toLowerCase()}`
      : "/"

  const country = data[pageIndex];

  return (
    <main>
      <div className="flex justify-between">
        <LinkBtn href="/" text={"Menu"} />{" "}
        <div className="flex gap-x-3">
          <LinkBtn
            href={previousPage.toString()}
            text={"Previous Country"}
            classes={"w-64"}
          />
          <LinkBtn
            href={nextPage.toString()}
            text={"Next Country"}
            classes={"w-64"}
          />
        </div>
      </div>

      <div className="h-[450px] w-full grid lg:grid-cols-2 mt-20">
        <Image
          width={0}
          height={0}
          src={country?.flag}
          alt="flag"
          className="object-cover h-full w-full"
        />

        <div className="py-7 pl-32">
          <h2 className="text-5xl font-[600] mb-10">{country?.name}</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-y-[5px]">
              <p className="text-lg font-[300]">
                Native Name:{" "}
                <span className="opacity-85">{country?.nativeName}</span>
              </p>
              <p className="text-lg font-[300]">
                Population:{" "}
                <span className="opacity-85">{country?.population}</span>
              </p>
              <p className="text-lg font-[300]">
                Region: <span className="opacity-85">{country?.region}</span>
              </p>
              <p className="text-lg font-[300]">
                Sub Region:{" "}
                <span className="opacity-85">{country?.subregion}</span>
              </p>
              <p className="text-lg font-[300]">
                Capital: <span className="opacity-85">{country?.capital}</span>
              </p>
            </div>

            <div className="flex flex-col gap-y-[5px]">
              <p className="text-lg font-[300]">
                Top Level Domain:{" "}
                <span className="opacity-85">{country?.topLevelDomain}</span>
              </p>
              <p className="text-lg font-[300]">
                Currencies:{" "}
                <span className="opacity-85">
                  {country.currencies && country.currencies[0].name}
                </span>
              </p>
              <p className="text-lg font-[300]">
                Languages:{" "}
                <span className="opacity-85">
                  {country?.languages.map((lang, i) => (
                    <span key={i}>
                      {lang.name}
                      {i !== country?.languages.length - 1 && ", "}
                    </span>
                  ))}
                </span>
              </p>
            </div>
          </div>
          {country?.borders && (
            <div className="mt-28">
            <p className="flex gap-3 items-center flex-wrap">
              Border Countries:
              {country?.borders?.map((border, i) => (
                <Link
                  key={i}
                  href={`/${border.toLowerCase()}`}
                  className="bg-main hover:bg-slate-600 transition-colors duration-300 w-fit px-3 py-2 rounded-lg text-white"
                >
                  <span className="text-[14px]">
                    {data.map(
                      (country) =>
                        country.alpha3Code === border &&
                        country.name.split("(")[0]
                    )}
                  </span>
                </Link>
              ))}
            </p>
          </div>
          
          )}
        </div>
      </div>
    </main>
  );
};

export default Page;
