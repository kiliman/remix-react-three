import { ClientOnly } from "remix-utils";
import Game from "~/components/Game.client";

export default function Index() {
  return (
    <ClientOnly fallback={<div>Loading...</div>}>{() => <Game />}</ClientOnly>
  );
}
