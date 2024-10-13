/* eslint-disable @next/next/no-img-element */
import {
  MaxWidthWrapper,
  CheckList,
  UserReview,
  UserReviews,
  Icons,
  Phone,
} from "@/components";

export default function Home() {
  return (
    <div className="bg-slate-50">
      {/* hero section */}
      <section>
        {/* enclose content in MaxWidthWrapper component to give section a consistent size */}
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

              {/* a little slogan */}
              <p className="mt-8 text-lg text-balance max-w-prose text-center md:text-wrap lg:text-left lg:pr-10">
                With the wave of a wand,{" "}
                <span className="font-semibold">&quot;Abracasedabra&quot;</span>
                , transform your images into the case of your dreams!
              </p>

              <CheckList
                checkArray={[
                  "High-quality, durable material",
                  "5 year print guarantee",
                  "Modern iPhone models supported",
                ]}
              />

              <UserReviews
                userImages={[
                  "/users/user-1.png",
                  "/users/user-2.png",
                  "/users/user-3.png",
                  "/users/user-4.jpg",
                  "/users/user-5.jpg",
                ]}
                userReviews={1250}
                stars={5}
              />
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

      {/* value showcase section */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What our{" "}
              <span className="relative px-2">
                customers{" "}
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-7 text-rose-500" />
              </span>{" "}
              say
            </h2>
            <img
              src="/magician.png"
              alt="casemagician logo"
              className="w-24 order-0 lg:order-2"
            />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <UserReview imgSrc="/users/user-1.png" name="Jonathan">
              &ldquo; Absolutely love this phone case! It&apos;s sleek, stylish,
              and provides excellent protection without being bulky. The
              material feels high-quality and has a nice grip, so I&apos;m not
              worried about accidental drops. Had the case for two and a half
              months and the{" "}
              <span className="p-0.5 text-rose-600">
                image is still super clear
              </span>
              .&rdquo;
            </UserReview>
            <UserReview imgSrc="/users/user-4.jpg" name="Evan">
              &ldquo; I always keep my phone together with keys in my pocket,
              leading to some horrible scratch marks on previous cases. Alas,
              this phone case has not suffered a single terrible scratch yet.{" "}
              <span className="p-0.5 text-rose-600">
                Looks brand new even after a year
              </span>
              . Amazing! &rdquo;
            </UserReview>
          </div>
        </MaxWidthWrapper>

        {/* animated phone case section */}
        <div className="pt-16">
          {/* <Reviews /> */}
        </div>
      </section>
    </div>
  );
}
