import { component$, useStyles$ } from "@builder.io/qwik";
import { Carousel } from "@qwik-ui/headless";

export default component$(() => {
  useStyles$(styles);

  const colors = [
    "https://piyolamarket.uz/_next/image?url=https%3A%2F%2Fpub-84845a3beb954d788ceee2312654bab2.r2.dev%2Fproducts%2F4853c1eb-a263-4814-9027-7de9495cf841.webp&w=640&q=75",
    "https://piyolamarket.uz/_next/image?url=https%3A%2F%2Fpub-84845a3beb954d788ceee2312654bab2.r2.dev%2Fproducts%2Fba78e0a5-58b3-4eb9-9028-b864cfcca183.webp&w=640&q=75",
    "https://piyolamarket.uz/_next/image?url=https%3A%2F%2Fpub-84845a3beb954d788ceee2312654bab2.r2.dev%2Fproducts%2F52f3295b-3fb3-417e-b6a9-4acd586ad647.webp&w=640&q=75",
    "https://piyolamarket.uz/_next/image?url=https%3A%2F%2Fpub-84845a3beb954d788ceee2312654bab2.r2.dev%2Fproducts%2F225d1e08-2904-45ee-ab57-0726c9c62f38.webp&w=640&q=75",
    "https://piyolamarket.uz/_next/image?url=https%3A%2F%2Fpub-84845a3beb954d788ceee2312654bab2.r2.dev%2Fproducts%2F60fc8ed6-36b4-43b5-993c-1f18859c7586.webp&w=640&q=75"
  ];

  return (
    <Carousel.Root
      class="carousel-root max-w-[540px]"
      gap={10}
      sensitivity={{
        mouse: 2.5,
        touch: 2.25
      }}
    >
      <div class="carousel-buttons px-2">
        <Carousel.Previous>
          <div class="w-8 h-8 flex relative place-items-center rounded-full bg-slate-50">
               <svg class="absolute right-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="#000000" d="M224 128a8 8 0 0 1-8 8H59.31l58.35 58.34a8 8 0 0 1-11.32 11.32l-72-72a8 8 0 0 1 0-11.32l72-72a8 8 0 0 1 11.32 11.32L59.31 120H216a8 8 0 0 1 8 8Z"/></svg>
          </div>
        </Carousel.Previous>
        <Carousel.Next>
          <div class="w-8 h-8 flex relative place-items-center rounded-full bg-slate-50">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000000" d="M13 18.75a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06L17.94 12l-5.47-5.47a.75.75 0 0 1 1.06-1.06l6 6a.75.75 0 0 1 0 1.06l-6 6a.74.74 0 0 1-.53.22Z"/><path fill="#000000" d="M19 12.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5Z"/></svg>
          </div>
        </Carousel.Next>
      </div>
      <Carousel.Scroller class="carousel-scroller">
        {colors.map((color) => (
          <Carousel.Slide key={color} class="carousel-slide ">
           <div class="img-wrapper">
             <img
              decoding="async"
              loading="lazy"
              src={color}
              alt="img"
              width={375}
              height={420}
              class="w-full  h-auto"
            />
           </div>
          </Carousel.Slide>
        ))}
      </Carousel.Scroller>
    </Carousel.Root>
  );
});

import styles from "./carousel.css?inline";
