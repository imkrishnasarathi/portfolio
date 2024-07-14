"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <h1>Hey, I'm Krishna!</h1>
        <p>I'm a 14 year old full-stack web developer and tech enthusiast!</p>
        <p>
          I also love <Link href="/">collaborating</Link> with people through
          communities and open source!
        </p>
      </div>

      <div>
        <h1>About Me</h1>
        <h2>This is what I do:</h2>
        <ul className="list-disc">
          <li>High School Student</li>
          <li>Full Stack Web Developer</li>
          <li>Python Programmer</li>
          <li>Open Source Contributor</li>
          <li>Content Creator</li>
        </ul>
        <div>
          <h2>Tech Stack</h2>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>React</span>
          <span>Next.js</span>
          <span>Python</span>
          <span>Go</span>
          <span>Git</span>
          <span>Tailwind</span>
          <span>NodeJs</span>
        </div>
      </div>
      <div>
        <h1>Check out my YouTube Videos at <Link href="https://www.youtube.com/@krishcodes" target="_blank">KrishCodes</Link></h1>
        <p>Your go-to for the latest programming tutorials and insights — no pointless talking, just the good stuff</p>
      </div>
    </>
  );
}
