import Image from "next/image";
import Emoji from "components/Emoji";

export default function Hero() {
  return (
    <section className="flex my-12 md:my-24 flex-col-reverse md:flex-row">
      <div className="mb-8 flex-1">
        <h1 className="mt-0 text-3xl sm:text-5xl text-left">
          Hey, I&apos;m Mark <Emoji emoji="👋" label="waving hello" />
        </h1>

        <div className="max-w-lg leading-8 text-lg md:text-xl mt-8">
          <p className="mb-4">
            <Emoji emoji="👨‍💻" label="developer" />
            <span className="px-1" />
            I&apos;m a developer and maker, building with React and JavaScript.
            Welcome to my digital garden.
          </p>
          <p>
            <Emoji emoji="⛰️" label="mountain" />
            <span className="px-1" />
            When I&apos;m not behind a screen, you&apos;ll find me mountain
            biking, skiing, and working on projects on our home in Boise, Idaho.
          </p>
        </div>
      </div>

      <div>
        <Image
          className="-ml-4 md:ml-8"
          src="/mark_foster_develper.png"
          width={240}
          height={240}
          alt="Picture of Mark Foster"
        />
      </div>
    </section>
  );
}
