
import { redirect } from "next/navigation";

export default function Home() {
   redirect("/about");
  return (
   <div></div>
  );
}
