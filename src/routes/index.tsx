import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import MobileLayout from "~/layouts/mobile-layout";
import Carousel from "~/layouts/component/carousel";
import ContentProduct from "~/layouts/component/content"
import GetOrder from "~/layouts/component/get-order"
export default component$(() => {
  return (
    <>
      <MobileLayout>
        <Carousel/>
        <ContentProduct/>
        <GetOrder/>
      </MobileLayout>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description"
    }
  ]
};
