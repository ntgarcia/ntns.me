import { ImageFrame } from "../image-frame";
import Image from "next/image";

export default function Bio() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-16 justify-center space-y-8 py-12 md:space-y-16 md:pt-10 relative px-4 md:px-8 lg:max-w-7xl mx-auto">
      <div className="w-full md:w-2/5">
        <h1 className="inline-block flex-wrap pb-8 font-medium leading-11 text-pretty text-5xl ">
          <span
            className="bg-clip-text text-transparent bg-gradient-to-r
          from-zinc-500 to-zinc-700 dark:from-zinc-400 dark:to-zinc-100"
          >
            Hello!
          </span>{" "}
          👋
        </h1>
        <div className="flex flex-col gap-4 leading-7">
          <p>
            I'm Nathan, a student at SAIT studying Software Development. Born in
            the Philippines, and raised in Los Angeles before moving to Canada,
            I've always had a passion for the arts. Growing up, I became more
            attentive to great design that enhances experiences around me,
            naturally gravitating to anything forward thinking and innovative.
          </p>
          <p>
            In my Software Development journey, I grew enamored in UI/UX design
            and graphic design. I knew I wanted to refine these core values into
            product design, where I can combine creative design aesthetics with
            thoughtful and sustainable functionalities. Eager to contribute
            innovative, user-centric solutions, I immerse myself in every stage
            of the design process, from concept to prototyping.
          </p>
          <p>
            In my spare time you'll likely find me hitting the gym, gaming,
            DJing, and almost always listening to music (
            <a
              href="https://open.spotify.com/playlist/6i9kekgrwQV7wjh4AEKduM?si=3e60e938d06145c3"
              className="underline hover:text-muted-foreground"
            >
              my playlist
            </a>
            ).
          </p>{" "}
        </div>
      </div>
      <div className="w-full md:w-2/5">
        <ImageFrame>
          <Image
            className="rounded-lg"
            src="/images/about_me.jpg"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt={""}
          />
        </ImageFrame>
      </div>
    </section>
  );
}
