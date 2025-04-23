import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-10">
      <div className="">
        <Button variant={"elevated"}>I am button</Button>
      </div>
      <div className="">
        <Input></Input>
      </div>
      <div className="">
        <Textarea></Textarea>
      </div>
      <div className="">
        <Progress value={50} />
      </div>
    </div>
  );
}
