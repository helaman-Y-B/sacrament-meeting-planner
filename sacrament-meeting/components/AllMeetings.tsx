import MeetingCard from "./MeetingCard";
import type { SacramentMeeting } from "@/lib/types";
import { notFound } from "next/navigation";
import { GET } from "@/app/api/meetings/route";

// Get all the meetings from meetings-db.ts and display them as cards in a list with links to each meeting's details page.
export default async function AllMeetings({ query = "" }: { query?: string }) {
  const response = await GET();

  if (!response.ok) {
    notFound();
  }

  const meetings: SacramentMeeting[] = await response.json();
  const normalizedQuery = query.trim().toLowerCase(); // Set the search query to lower case and spaces
  const filteredMeetings = normalizedQuery
    ? meetings.filter((meeting) => {
        // Filters based on the Query.
        const searchableText = [
          meeting.date,
          meeting.meetingType,
          meeting.presiding,
          meeting.conducting,
          ...meeting.speakers.flatMap((speaker) => [
            speaker.name,
            speaker.topic,
          ]), // flatMap puts every speaker into a single array. .map would return 2 elements arrays
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(normalizedQuery); // Makes the search based on the "normalized query".
      })
    : meetings;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Display each meeting as a card with a link to the meeting's details page. */}
        {filteredMeetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
      {filteredMeetings.length === 0 && (
        <p className="p-4 text-center text-gray-600">
          No meetings matched your search.
        </p>
      )}
    </>
  );
}
