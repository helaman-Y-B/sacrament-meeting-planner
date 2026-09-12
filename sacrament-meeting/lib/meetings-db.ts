import type { SacramentMeeting } from "./types";

// In-memory database with 5 sample sacrament meetings
const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: "2026-09-13",
    meetingType: "regular",
    presiding: "Bishop Daniel Carter",
    conducting: "Brother Marcus Lee",
    announcements: ["Youth temple trip is Saturday, September 19."],
    openingHymn: { number: 2, title: "The Spirit of God" },
    openingPrayer: "Sister Emily Brooks",
    wardBusiness: [
      { description: "Sustain the new Sunday School presidency." },
    ],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: "As Now We Take the Sacrament" },
    speakers: [
      {
        name: "Elder Nathan Cole",
        topic: "Remembering the Savior",
        type: "speaker",
      },
      { name: "Ward Choir", topic: "Come, Follow Me", type: "musical-number" },
      {
        name: "Sister Grace Morgan",
        topic: "Finding Peace Through Prayer",
        type: "speaker",
      },
    ],
    closingHymn: { number: 85, title: "How Firm a Foundation" },
    closingPrayer: "Brother Thomas Reed",
  },
  {
    id: 2,
    date: "2026-09-20",
    meetingType: "testimony",
    presiding: "Bishop Daniel Carter",
    conducting: "Sister Olivia Grant",
    announcements: [
      "Please remain seated after the meeting for choir practice.",
    ],
    openingHymn: { number: 66, title: "Rejoice, the Lord Is King!" },
    openingPrayer: "Brother Caleb Wright",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 193, title: "I Stand All Amazed" },
    speakers: [],
    closingHymn: { number: 227, title: "There Is Sunshine in My Soul Today" },
    closingPrayer: "Sister Hannah Price",
  },
  {
    id: 3,
    date: "2026-09-27",
    meetingType: "stake",
    presiding: "President Robert Hayes",
    conducting: "President Michelle Adams",
    announcements: ["Stake conference sessions begin Saturday at 6:00 p.m."],
    openingHymn: { number: 89, title: "The Lord Is My Shepherd" },
    openingPrayer: "Sister Lauren Kim",
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: { number: 174, title: "While of These Emblems We Partake" },
    speakers: [
      {
        name: "Elder Samuel Ortiz",
        topic: "Covenants and Discipleship",
        type: "speaker",
      },
      {
        name: "Stake Choir",
        topic: "Where Can I Turn for Peace?",
        type: "musical-number",
      },
      {
        name: "Sister Rebecca Young",
        topic: "Ministering with Christlike Love",
        type: "speaker",
      },
    ],
    closingHymn: { number: 219, title: "Because I Have Been Given Much" },
    closingPrayer: "President James Bell",
  },
  {
    id: 4,
    date: "2026-10-04",
    meetingType: "general",
    presiding: "Bishop Daniel Carter",
    conducting: "Brother Marcus Lee",
    announcements: ["General conference broadcast begins at 10:00 a.m."],
    openingHymn: { number: 6, title: "Redeemer of Israel" },
    openingPrayer: "Brother Isaac Moore",
    wardBusiness: [{ description: "Welcome new members of the ward." }],
    stakeBusiness: false,
    sacramentHymn: { number: 185, title: "Reverently and Meekly Now" },
    speakers: [
      {
        name: "Sister Maria Santos",
        topic: "Hearing the Lord",
        type: "speaker",
      },
      {
        name: "Youth Choir",
        topic: "We'll Bring the World His Truth",
        type: "musical-number",
      },
    ],
    closingHymn: { number: 98, title: "I Need Thee Every Hour" },
    closingPrayer: "Sister Naomi Ellis",
  },
  {
    id: 5,
    date: "2026-10-11",
    meetingType: "regular",
    presiding: "Bishop Daniel Carter",
    conducting: "Brother Ethan Foster",
    openingHymn: { number: 81, title: "Press Forward, Saints" },
    openingPrayer: "Sister Chloe Bennett",
    wardBusiness: [
      { description: "Approve the ward budget for the upcoming quarter." },
      { description: "Recognize departing missionaries." },
    ],
    stakeBusiness: false,
    sacramentHymn: { number: 181, title: "Jesus of Nazareth, Savior and King" },
    speakers: [
      {
        name: "Brother Aaron Wells",
        topic: "The Strength of Small and Simple Things",
        type: "speaker",
      },
      {
        name: "Sister Lily Chen",
        topic: "Faith in Jesus Christ",
        type: "speaker",
      },
    ],
    closingHymn: { number: 223, title: "Have I Done Any Good?" },
    closingPrayer: "Brother Daniel Webb",
  },
];

// Functions to retrieve sacrament meetings from the in-memory database
// Function to retrieve all sacrament meetings
export function getAllMeetings(): SacramentMeeting[] {
  return meetings;
}

// Function to retrieve a sacrament meeting by date
export function getMeetingByDate(date: string): SacramentMeeting | undefined {
  return meetings.find((meeting) => meeting.date === date);
}

// Function to retrieve a sacrament meeting by ID
export function getMeetingById(id: number): SacramentMeeting | undefined {
  return meetings.find((meeting) => meeting.id === id);
}

// Function to filter sacrament meetings by meeting type
export function filterMeetingsByType(
  meetingType: "testimony" | "regular" | "stake" | "general",
): SacramentMeeting[] {
  return meetings.filter((meeting) => meeting.meetingType === meetingType);
}

// Testing the retrieval functions
console.log("All Meetings:", getAllMeetings());

console.log("Meeting on 2026-09-20:", getMeetingByDate("2026-09-20"));

console.log("Meeting with ID 3:", getMeetingById(3));

console.log("Regular Meetings:", filterMeetingsByType("regular"));

console.log("Testimony Meetings:", filterMeetingsByType("testimony"));

console.log("Stake Meetings:", filterMeetingsByType("stake"));

console.log("General Meetings:", filterMeetingsByType("general"));
