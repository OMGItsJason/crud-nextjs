import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AddTodo() {
  return (
    <Card className="w-[25rem] bg-zinc-800 border-0">
      <CardHeader className="text-center text-white">
        <CardTitle className="text-3xl font-bold">LOG IN</CardTitle>
        <CardDescription>SOCIAL LINKS PROFILE</CardDescription>
      </CardHeader>
      <CardContent>
        <form method="post" className="flex flex-col gap-5">
          <Input
            placeholder="Name"
            className="border-0 bg-zinc-700 focus-visible:ring-0 text-white"
          />
          <Input
            placeholder="Password"
            className="border-0 bg-zinc-700 focus-visible:ring-0 text-white"
          />
          <Button>Log In</Button>
        </form>
      </CardContent>
      <CardFooter className="text-white justify-center text-xs">
        © 2025 Demo No Data Is Saved
      </CardFooter>
    </Card>
  );
}
