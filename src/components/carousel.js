import Link from "next/link";
import Image from "next/image";

export default function Carousel({ heading, data, movieIdCast }) {
  //Component for carousel
  return (
    <div className="mb-12 mt-5 sm:mt-8">
      <h1 className="text-center underline decoration-rose-500 underline-offset-8 text-cyan-500 text-3xl md:text-4xl font-bold">
        {heading}
      </h1>
      <div
        id="scroll-bar"
        className="mx-auto my-5 flex flex-row overflow-x-scroll carousel-center max-w-7xl p-4 space-x-5 bg-neutral rounded-box"
      >
        {/* Carousel Cards */}
        {data?.map((item) => (
          <Link
            key={item?.id}
            href={movieIdCast ? `/movie/${movieIdCast}` : `/movie/${item?.id}`}
            className="rounded-xl hover:shadow-sky-300 hover:shadow-2xl transition-shadow duration-300 ease-in-out carousel-item flex flex-col items-center"
          >
            {/* Requested Image with Fallback Path */}
            {item?.profile_path || item?.poster_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/w300/${
                  item?.profile_path || item?.poster_path
                }`}
                alt={item?.name || item?.title}
                className="rounded-box object-cover object-center h-[450px]"
                width={300}
                height={450}
              />
            ) : (
              <Image
                src={`https://placeholder.pics/svg/500x750/E0F9FF/000000-E0F9FF/${
                  item?.name || item?.title
                }`}
                alt={item?.name || item?.title}
                className="rounded-box object-cover object-center h-[450px]"
                width={300}
                height={450}
              />
            )}
            {/* Requested Data */}
            <h1 className="mt-2 max-w-[300px] text-center text-xl text-[#D9D9D9] font-bold">
              {item?.name || item?.title}
            </h1>
            {item?.character && (
              <p className="mt-2 text-amber-400 text-center max-w-[300px] text-lg">
                {item?.character}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
