/* eslint-disable @next/next/no-img-element */
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Check, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        {/* enclose content in MaxWidthWrapper component to keep page sizing consistent */}
        <MaxWidthWrapper className="pb-24 pt-10 sm:pb-32 lg:pt-24 lg:pb-52 lg:grid lg:grid-cols-3 lg:gap-x-0 xl:gap-x-8 xl:pt-32">
          {/* left area of landing page showcasing the slogan and reviews */}
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center flex flex-col items-center lg:items-start lg:text-left">
              {/* casemagician logo */}
              <div className="absolute w-28 left-0 -top-28 hidden lg:block">
                <img
                  src="/magician.png"
                  alt="Magician logo"
                  className="w-full"
                />
              </div>

              {/* title of landing page */}
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Phone Case,{" "}
                <span className="px-2 text-rose-600">Magically</span> brought to
                life
              </h1>

              <p className="mt-8 text-lg text-balance max-w-prose text-center md:text-wrap lg:text-left lg:pr-10">
                With the wave of a wand,{" "}
                <span className="font-semibold">&quot;Abracasedabra&quot;</span>
                , transform your images into the case of your dreams!
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-red-600" />
                  High-quality, durable material
                </li>

                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-red-600" />5 year
                  print guarantee
                </li>

                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-red-600" />
                  Modern iPhone models supported
                </li>
              </ul>

              {/* user reviews section */}
              <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                <div className="flex -space-x-4">
                  <img
                    src="/users/user-1.png"
                    alt="user image"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />

                  <img
                    src="/users/user-2.png"
                    alt="user image"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />

                  <img
                    src="/users/user-3.png"
                    alt="user image"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />

                  <img
                    src="/users/user-4.jpg"
                    alt="user image"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />

                  <img
                    src="/users/user-5.jpg"
                    alt="user image"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  </div>

                  <p>
                    <span className="font-semibold">1,250</span> Positive
                    Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* right area of landing page showcasing an example product */}
          <div className="col-span-full lg:col-span-1 w-full h-fit flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20">
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                alt="your image arrow"
                className="absolute w-40 lg:w-52 left-64 top-10 select-none hidden sm:block lg:hidden xl:block"
              />
              <img
                src="/line.png"
                alt="line"
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
