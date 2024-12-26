"use client";
import Link from "next/link";
import Image from "next/image";
import profileImage from "../../public/pic.png";

export default function Home() {
  return (
    <>
      <div className="p-6 mb-5 flex flex-col md:flex-row items-center justify-center">
        {/* Profile Image */}
        <div className="mr-6 mb-6 md:mb-0 md:mr-10">
          <Image
            src={profileImage}
            alt="Profile Image"
            width={400}
            height={400}
            className="rounded-3xl mr-20"
          />
        </div>
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-6xl font-bold mb-2">Hey, I&apos;m Krishna!</h1>
          <br />
          <p className="text-lg mb-4">
            I&apos;m a 15-year-old full-stack web developer and content creator!
          </p>
          <p className="text-lg">
            I love{" "}
            <Link href="/contact" className="text-blue-500 hover:underline">
              collaborating
            </Link>{" "}
            with people through communities and open source!
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 p-20">
        <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-lg shadow-lg p-10 transition-transform duration-300 ease-in-out hover:scale-[1.05]">
          <h1 className="text-3xl font-bold text-white mb-4">About Me</h1>
          <h2 className="text-2xl font-semibold text-white mb-2">What I do:</h2>
          <ul className="list-disc pl-6 text-white space-y-2 mb-6">
            <li>High School Student</li>
            <li>Full Stack Web Developer</li>
            <li>Open Source Contributor</li>
            <li>Technical Writer</li>
            <li>Exploring the world of AI</li>
          </ul>
          <h2 className="text-2xl font-semibold text-white mb-2">Tech Stack</h2>
          <div className="flex flex-wrap gap-4">
            {[
              "typescript",
              "csharp",
              "python",
              "react",
              "nextjs",
              "go",
              "git",
              "tailwindcss",
              "nodejs",
              "postgresql",
            ].map((tech) => (
              <div key={tech} className="bg-white p-2 rounded-lg shadow-md">
                <Image
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                  alt={tech}
                  width={30}
                  height={30}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Two Split Cards */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* YouTube Card */}
          <div className="flex-grow bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg shadow-lg p-10 transition-transform duration-300 ease-in-out hover:scale-[1.05]">
            <h1 className="text-3xl font-bold text-white mb-4">
              Check out my YouTube Videos at{" "}
              <Link
                href="https://www.youtube.com/@krishcodes"
                target="_blank"
                className="text-blue-300 hover:underline"
              >
                KrishCodes
              </Link>
            </h1>
            <p className="text-lg text-white">
              Your go-to for the latest programming tutorials and insights &mdash; no
              pointless talking, just the good stuff.
            </p>
          </div>

          {/* Podcast Card */}
          <div className="flex-grow bg-gradient-to-br from-teal-600 to-cyan-700 rounded-lg shadow-lg p-10 transition-transform duration-300 ease-in-out hover:scale-[1.05]">
            <h1 className="text-3xl font-bold text-white mb-4">
              Listen to my Podcast{" "}
              <Link
                href="https://open.spotify.com/show/51YlbX6RvxjYNbMuaqWE3P?si=6dfe205933844e8a"
                target="_blank"
                className="text-blue-300 hover:underline"
              >
                The 404 Podcast
              </Link>
            </h1>
            <p className="text-lg text-white">
              Tune in for engaging discussions on technology, development, and more.
              Join me as I explore the latest trends and insights in the tech world.
            </p>
          </div>
        </div>
      </div>

    </>
  );
}
