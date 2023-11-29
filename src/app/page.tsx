import { redirect } from "next/navigation";
export default async function toHome() {
  redirect("/home");
}
