"use client";
import Link from "next/link";
import Image from "next/image";
import profileImage from "../../public/pic.png";

export default function Home() {
  return (
    <>
      <div className="p-6 mb-16 flex flex-col md:flex-row items-center">
        {/* Profile Image */}
        <div className="mr-6 mb-6 md:mb-0 md:mr-10">
          <Image
            src={profileImage}
            alt="Profile Image"
            width={500}
            height={500}
            className="rounded-3xl"
          />
        </div>
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-6xl font-bold mb-2">Hey, I&apos;m Krishna!</h1>
          <br />
          <p className="text-lg mb-4">
            I&apos;m a 14-year-old full-stack web developer and tech enthusiast!
          </p>
          <p className="text-lg">
            I also love{" "}
            <Link href="/contact" className="text-blue-500 hover:underline">
              collaborating
            </Link>{" "}
            with people through communities and open source!
          </p>
        </div>
      </div>

      <svg viewBox="0 0 1440 20" className="mb-6">
        <path
          fill="#ffffff"
          d="M0,10 C240,30 480,-10 720,10 C960,30 1200,-10 1440,10 L1440,20 L0,20 Z"
        ></path>
      </svg>

      <div className="bg-[#215cb5] rounded-lg shadow-md p-6 mb-6 mt-16">
        <h1 className="text-2xl font-bold mb-4">About Me</h1>
        <h2 className="text-xl font-bold mb-2">What I do:</h2>
        <ul className="list-disc pl-4 mb-4">
          <li>High School Student</li>
          <li>Full Stack Web Developer</li>
          <li>Python Programmer</li>
          <li>Open Source Contributor</li>
          <li>Content Creator</li>
        </ul>
        <div>
          <h2 className="text-xl font-bold mb-2">Tech Stack</h2>
          <div className="flex flex-wrap">
            <div className="text-[#150b52] py-1 px-1 mr-2 mb-2">
              <Image
                className="rounded-lg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                width={30}
                height={30}
              />
            </div>

            <div className="text-[#150b52] py-1 px-1 mr-2 mb-2">
              <Image
                className="rounded-lg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                width={30}
                height={30}
              />
            </div>

            <div className="text-[#150b52] py-1 px-1 mr-2 mb-2">
              <Image
                className="rounded-lg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                width={30}
                height={30}
              />
            </div>

            <div className="text-[#150b52] py-1 px-1 mr-2 mb-2">
              <Image
                className="rounded-lg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                alt="Next.js"
                width={30}
                height={30}
              />
            </div>

            <div className="text-[#150b52] py-1 px-1 mr-2 mb-2">
              <Image
                className="rounded-lg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python"
                width={30}
                height={30}
              />
            </div>

            <div className="text-[#150b52] py-1 px-1 mr-2 mb-2">
              <Image
                className="rounded-lg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
                alt="Go"
                width={30}
                height={30}
              />
            </div>

            <div className="text-[#150b52] py-1 px-1 mr-2 mb-2">
              <Image
                className="rounded-lg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git"
                width={30}
                height={30}
              />
            </div>

            <div className="text-[#150b52] py-1 px-1 mr-2 mb-2">
              <Image
                className="rounded-lg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                alt="Tailwind CSS"
                width={30}
                height={30}
              />
            </div>

            <div className="text-[#150b52] py-1 px-1 mr-2 mb-2">
              <Image
                className="rounded-lg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#002b96] rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-2xl font-bold mb-2">
          Check out my YouTube Videos at{" "}
          <Link
            href="https://www.youtube.com/@krishcodes"
            target="_blank"
            className="text-blue-300 hover:underline"
          >
            KrishCodes
          </Link>
        </h1>
        <p className="text-lg">
          Your go-to for the latest programming tutorials and insights &mdash; no
          pointless talking, just the good stuff.
        </p>
      </div>
    </>
  );
}
