import trpc from "./services/trpc";
import getContent from "./actions/get-content";
import saveContent from "./actions/save-content";

const router = trpc.router({
  getContent,
  saveContent,
});

export type Router = typeof router;

export default router;
