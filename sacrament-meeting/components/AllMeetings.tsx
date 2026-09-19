import MeetingCard from "./MeetingCard";
import { Pagination } from "./Pagination";
import type { SacramentMeeting } from "@/lib/types";
import { notFound } from "next/navigation";
import { GET } from "@/app/api/meetings/route";

// Get all the meetings from meetings-db.ts and display them as cards in a list with links to each meeting's details page.
export default async function AllMeetings({
  query = "",
  page = 1,
}: {
  query?: string;
  page?: number;
}) {
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

  // Limit each page to five cards and calculate how many pages the filtered results need.
  const cardsPerPage = 5;
  const totalPages = Math.max(
    1,
    Math.ceil(filteredMeetings.length / cardsPerPage), // Divides the meetings into 5 per page.
  );

  // Keep invalid page values inside the available page range.
  let currentPage = page;
  if (currentPage < 1) {
    currentPage = 1;
  }
  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  // Calculate the array positions for the current page and show only those meetings.
  const index = (currentPage - 1) * cardsPerPage;
  const visibleMeetings = filteredMeetings.slice(index, index + cardsPerPage);

  return (
    <>
      <Pagination totalPages={totalPages} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Display each meeting as a card with a link to the meeting's details page. */}
        {visibleMeetings.map((meeting) => (
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
