import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";

// Display a single meeting as a card with a link to the meeting's details page using the provided props.
export default function MeetingCard({
  meeting,
}: {
  meeting: SacramentMeeting;
}) {
  return (
    <Link
      href={`/meetings/${meeting.id}`}
      className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow m-4 border-2 border-gray-200"
    >
      <h2 className="text-xl font-bold text-gray-800">
        Meeting: {meeting.meetingType}
      </h2>
      <p className="text-gray-600">{meeting.date}</p>
      <p className="text-gray-600">Presiding: {meeting.presiding}</p>
      <p className="text-gray-600">Conducting: {meeting.conducting}</p>
    </Link>
  );
}
