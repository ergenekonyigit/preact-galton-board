/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import GaltonBoard from "../islands/GaltonBoard.tsx";

export default function Home() {
  return (
    <div class={tw`grid h-screen place-items-center`}>
      <div class={tw`text(center)`}>
        <div class={tw`font-bold text(xl blue-400)`}>Galton Board</div>
      </div>
      <GaltonBoard />
      <div class={tw`text(center)`}>
        <a
          class={tw`text(xs gray-400)`}
          target="_blank"
          alt="GitHub URL"
          href="https://github.com/ergenekonyigit/preact-galton-board"
        >
          github.com/ergenekonyigit/preact-galton-board
        </a>
      </div>
    </div>
  );
}
