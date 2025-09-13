import { component$ , Slot } from "@builder.io/qwik";
import Header from "../component/header";
import Footer from "../component/footer";
export default component$(() => {
    return (
        <>
        <Header />
        <main class="max-w-[540px] mx-auto">
            <div class="container mx-auto">
                <Slot />
            </div>
        </main>
        <Footer />
        </>
    );
});

