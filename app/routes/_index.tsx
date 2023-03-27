import { Link } from "@remix-run/react";
import { SparklesIcon } from "@heroicons/react/20/solid";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";

export default function IndexRoute() {
  return (
    <div className="bg-orange-50 flex-1 flex flex-col gap-12 text-neutral-900">
      <Header />

      <div className="w-full max-w-6xl mx-auto flex-1 flex flex-col items-center justify-center gap-16 p-6">
        <div className="flex flex-col items-center justify-center gap-7">
          <h1 className="text-6xl sm:text-7xl max-w-3xl text-neutral-900 font-black text-center">
            Revamp your home <span className="text-orange-800">with AI</span> in
            seconds.
          </h1>

          <p className="text-lg text-neutral-600 font-medium text-center">
            Take a photo of your home and redesign it to a style of your choice.
          </p>

          <Link
            to="/revamp"
            className="bg-orange-800 text-orange-200 px-7 py-3 rounded-xl font-bold hover:bg-orange-700 flex items-center justify-center gap-3"
          >
            <SparklesIcon className="-ml-1.5 h-6 w-6" />
            <span>Revamp your home</span>
          </Link>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <figure className="flex-1 flex flex-col gap-2">
            <figcaption className="text-neutral-700 self-center font-medium text-lg">
              Original
            </figcaption>
            <img
              className="w-full rounded-xl h-96 object-cover"
              src="/images/sample-original-house.jpg"
              alt="A sample original house"
            />
          </figure>

          <figure className="flex-1 flex flex-col gap-2">
            <figcaption className="text-neutral-700 self-center font-medium text-lg">
              Revamped
            </figcaption>
            <img
              className="w-full rounded-xl h-96 object-cover"
              src="/images/sample-revamped-house.png"
              alt="A sample revamped house"
            />
          </figure>
        </div>
      </div>

      <Footer />
    </div>
  );
}
