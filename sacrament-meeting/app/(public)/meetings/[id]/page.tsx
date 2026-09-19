import { notFound } from "next/navigation";
import MeetingDetail from "@/components/MeetingDetail";
import { GET } from "@/app/api/meetings/[id]/route";

export default async function MeetingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await GET(
    new Request(`http://localhost/api/meetings/${id}`),
    { params: Promise.resolve({ id }) },
  );

  if (!response.ok) {
    notFound();
  }

  const meeting = await response.json();

  return <MeetingDetail meeting={meeting} />;
}
