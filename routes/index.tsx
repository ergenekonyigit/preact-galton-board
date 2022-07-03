/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import GaltonBoard from "../islands/GaltonBoard.tsx";

export default function Home() {
  return (
    <div class={tw`grid h-screen place-items-center`}>
      <GaltonBoard />
    </div>
  );
}
