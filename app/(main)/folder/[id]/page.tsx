import Header from "@/components/layout/header";

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <>
      <Header title={`Folder / ${id}`} />
    </>
  );
}
