import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container bg-primary-foreground flex-1 py-10">
      <h2 className="text-xl">お問い合わせ ありがとうございました！</h2>
      <Button variant="outline" size="sm" asChild className="mt-10">
        <Link href="/">戻る</Link>
      </Button>
    </div>
  );
}
