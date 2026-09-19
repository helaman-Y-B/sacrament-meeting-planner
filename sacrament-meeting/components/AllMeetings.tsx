import MeetingCard from "./MeetingCard";
import type { SacramentMeeting } from "@/lib/types";
import { notFound } from "next/navigation";
import { GET } from "@/app/api/meetings/route";

// Get all the meetings from meetings-db.ts and display them as cards in a list with links to each meeting's details page.
export default async function AllMeetings() {
  const response = await GET();

  if (!response.ok) {
    notFound();
  }

  const meetings: SacramentMeeting[] = await response.json();

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Display each meeting as a card with a link to the meeting's details page. */}
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </>
  );
}
