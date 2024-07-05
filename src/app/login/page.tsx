import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { FaGoogle } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

export default function LoginPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Welcome back!</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Sign in with Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <Alert variant="success">
            <FaCheck className="h-4 w-4" />
            <AlertDescription className="text-balance	">
              We send you an email with a magic link to sign in.
            </AlertDescription>
          </Alert>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button className="w-full">Sign in</Button>
          <Separator className="my-4" />
          <div className="w-full flex flex-col space-y-2">
            <Button className="w-full">
              <FaGoogle className="mr-2" />
              Google
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
