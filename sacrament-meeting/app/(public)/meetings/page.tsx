import AllMeetings from "@/components/AllMeetings";
import { MeetingSearch } from "@/components/MeetingSearch";

export default async function Meetings(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query ?? "";
  const page = Number(searchParams?.page) || 1;

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 mt-4 p-4">
        <h1 className="text-4xl font-bold text-center">Meetings</h1>
        <p className="text-lg text-center text-gray-600">
          View all upcoming sacrament meetings and their details.
        </p>
        <MeetingSearch />
      </section>
      <AllMeetings query={query} page={page} />
    </>
  );
}
