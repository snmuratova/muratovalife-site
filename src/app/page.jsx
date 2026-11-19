import Home from "./Home";
import { readCards } from "../lib/store";
export const dynamic = "force-dynamic";
export default async function Page(){return <Home cards={(await readCards()).filter(c=>c.visible)} />;}
