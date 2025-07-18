import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center justify-center bg-sky-400 gap-y-6">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md", font.className)}>Auth</h1>
        <p className="text-white text-lg">A simple authentication service</p>
      </div>
      <LoginButton>
        <Button variant={"secondary"} size={"lg"} className="cursor-pointer">
          Sign in
        </Button>
      </LoginButton>
    </main>
  );
}
