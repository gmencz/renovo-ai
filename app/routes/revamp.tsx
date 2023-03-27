import { Footer } from "~/components/footer";
import { Header } from "~/components/header";

export default function RevampRoute() {
  return (
    <div className="bg-orange-50 flex-1 flex flex-col gap-12 text-neutral-900">
      <Header />

      <div className="w-full max-w-6xl mx-auto flex-1 flex flex-col items-center justify-center gap-16 p-6">
        <div className="flex flex-col items-center justify-center gap-7">
          <h1 className="text-6xl sm:text-7xl max-w-3xl text-neutral-900 font-black text-center">
            Create your dream home{" "}
            <span className="text-orange-800">with AI</span>.
          </h1>
          <p className="text-lg max-w-xl text-neutral-600 font-medium text-center">
            Sign in with Google to create a free account and start revamping
            your home. You will get 3 revamps for free.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
