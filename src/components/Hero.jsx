function Hero() {
  return (
    <div class="overflow-hidden mt-2.5">
      <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div class="flex flex-row flex-wrap">
          <div class="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
            <div class="relative  max-h-98  bg-orange-100 ">
              <a href="#">
                <img
                  class="max-w-fit w-fit  h-96 ml-auto"
                  src="/Maincard.png"
                  alt="Image description"
                ></img>
              </a>
              <div class="absolute px-12 pt-8 pb-5 bottom-16 w-full ">
                <a href="#">
                  <h2 class="text-3xl font-bold  text-black mb-3 ">
                    Women's fashion
                  </h2>
                </a>
                <p class="text-black  text-sm text-justify w-3/4 	">
                  Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                  incidid-unt labore edolore magna aliquapendisse ultrices
                  gravida.
                </p>
                <div class="pt-2">
                  <div class=" mt-3 underline  decoration-red-500 font-semibold">
                    SHOP NOW
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex-shrink max-w-full w-full lg:w-1/2">
            <div class="box-one flex flex-row flex-wrap">
              <article class="flex-shrink max-w-full w-full sm:w-1/2">
                <div class="relative hover-img max-h-48 bg-green-100 overflow-hidden">
                  <a href="#">
                    <img
                      class="max-w-fit w-fit ml-auto h-48"
                      src="/mens.png"
                      alt="Image description"
                    ></img>
                  </a>
                  <div class="absolute px-8 pt-7 pb-4 bottom-8 w-full bg-gradient-cover">
                    <a href="#">
                      <h2 class="text-lg font-bold capitalize leading-tight text-black mb-1">
                        Men's Fashion
                      </h2>
                    </a>
                    <p class="text-black  text-sm text-justify w-3/4 ">
                      358 items
                    </p>

                    <div class="pt-1">
                      <div class="text-black">
                        <div class="mt-3 underline  decoration-red-500 font-semibold text-sm">
                          SHOP NOW
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article class="flex-shrink max-w-full w-full sm:w-1/2">
                <div class="relative hover-img max-h-48  bg-blue-100 overflow-hidden">
                  <a href="#">
                    <img
                      class="max-w-fit w-fit ml-auto h-48"
                      src="/kids.png"
                      alt="Image description"
                    ></img>
                  </a>
                  <div class="absolute px-8 pt-7 pb-4 bottom-8 w-full bg-gradient-cover">
                    <a href="#">
                      <h2 class="text-lg font-bold  text-black mb-1">
                        Kid's fashion
                      </h2>
                    </a>
                    <p class="text-black  text-sm text-justify w-3/4 ">
                      273 items
                    </p>
                    <div class="pt-1">
                      <div class="text-black">
                        <div class="mt-3 underline  decoration-red-500 font-semibold text-sm">
                          SHOP NOW
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article class="flex-shrink max-w-full w-full sm:w-1/2">
                <div class="relative hover-img max-h-48  bg-pink-100 overflow-hidden">
                  <a href="#">
                    <img
                      class="max-w-fit w-fit ml-auto h-48"
                      src="/cosmetics.png"
                      alt="Image description"
                    ></img>
                  </a>
                  <div class="absolute px-8 pt-7 pb-4 bottom-8 w-full bg-gradient-cover">
                    <a href="#">
                      <h2 class="text-lg font-bold  text-black mb-1">
                        Cosmetics
                      </h2>
                    </a>
                    <p class="text-black  text-sm text-justify w-3/4 ">
                      159 items
                    </p>
                    <div class="pt-1">
                      <div class="text-black">
                        <div class="mt-3 underline  decoration-red-500 font-semibold text-sm">
                          SHOP NOW
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article class="flex-shrink max-w-full w-full sm:w-1/2">
                <div class="relative hover-img max-h-48  bg-cyan-100 overflow-hidden">
                  <a href="#">
                    <img
                      class="max-w-fit w-fit ml-auto h-48"
                      src="/accessories.png"
                      alt="Image description"
                    ></img>
                  </a>
                  <div class="absolute px-8 pt-7 pb-4 bottom-8 w-full bg-gradient-cover">
                    <a href="#">
                      <h2 class="text-lg font-bold  text-black mb-1">
                        Accessories
                      </h2>
                    </a>
                    <p class="text-black  text-sm text-justify w-3/4 ">
                      792 items
                    </p>
                    <div class="pt-1">
                      <div class="text-black">
                        <div class="mt-3 underline  decoration-red-500 font-semibold text-sm">
                          SHOP NOW
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
