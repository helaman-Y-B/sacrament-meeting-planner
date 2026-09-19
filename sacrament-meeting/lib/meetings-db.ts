import type { SacramentMeeting } from "./types";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

//const ITEMS_PER_PAGE = 5;

// Functions to retrieve sacrament meetings from the in-memory database
// Function to retrieve all sacrament meetings
export async function getAllMeetings(): Promise<SacramentMeeting[]> {
  const rows = await sql` 
  SELECT
    id,
    to_char(date, 'YYYY-MM-DD') AS "date",
    meeting_type                AS "meetingType",
    presiding, conducting, announcements,
    opening_hymn                AS "openingHymn",
    opening_prayer              AS "openingPrayer",
    ward_business               AS "wardBusiness",
    stake_business              AS "stakeBusiness",
    sacrament_hymn              AS "sacramentHymn",
    speakers,
    closing_hymn                AS "closingHymn",
    closing_prayer              AS "closingPrayer"
  FROM meetings`;
  return rows as unknown as SacramentMeeting[];
}

// Function to retrieve a sacrament meeting by date
export async function getMeetingByDate(
  date: string,
): Promise<SacramentMeeting | undefined> {
  const rows = await sql`
  SELECT
    id,
    to_char(date, 'YYYY-MM-DD') AS "date",
    meeting_type                AS "meetingType",
    presiding, conducting, announcements,
    opening_hymn                AS "openingHymn",
    opening_prayer              AS "openingPrayer",
    ward_business               AS "wardBusiness",
    stake_business              AS "stakeBusiness",
    sacrament_hymn              AS "sacramentHymn",
    speakers,
    closing_hymn                AS "closingHymn",
    closing_prayer              AS "closingPrayer"
  FROM meetings WHERE date = ${date}`;
  return rows[0] as SacramentMeeting | undefined;
}

// Function to retrieve a sacrament meeting by ID
export async function getMeetingById(
  id: number,
): Promise<SacramentMeeting | undefined> {
  const rows = await sql`
  SELECT
    id,
    to_char(date, 'YYYY-MM-DD') AS "date",
    meeting_type                AS "meetingType",
    presiding, conducting, announcements,
    opening_hymn                AS "openingHymn",
    opening_prayer              AS "openingPrayer",
    ward_business               AS "wardBusiness",
    stake_business              AS "stakeBusiness",
    sacrament_hymn              AS "sacramentHymn",
    speakers,
    closing_hymn                AS "closingHymn",
    closing_prayer              AS "closingPrayer" 
  FROM meetings WHERE id = ${id}`;
  return rows[0] as SacramentMeeting | undefined;
}

// Function to filter sacrament meetings by meeting type
export async function filterMeetingsByType(
  meetingType: "testimony" | "regular" | "stake" | "general",
): Promise<SacramentMeeting[]> {
  const rows = await sql`
    SELECT
      id,
      to_char(date, 'YYYY-MM-DD') AS "date",
      meeting_type                AS "meetingType",
      presiding, conducting, announcements,
      opening_hymn                AS "openingHymn",
      opening_prayer              AS "openingPrayer",
      ward_business               AS "wardBusiness",
      stake_business              AS "stakeBusiness",
      sacrament_hymn              AS "sacramentHymn",
      speakers,
      closing_hymn                AS "closingHymn",
      closing_prayer              AS "closingPrayer"
    FROM meetings WHERE meeting_type = ${meetingType}`;
  return rows as unknown as SacramentMeeting[];
}

// Testing the retrieval functions
console.log("All Meetings:", getAllMeetings());

console.log("Meeting on 2026-09-20:", getMeetingByDate("2026-09-20"));

console.log("Meeting with ID 3:", getMeetingById(3));

console.log("Regular Meetings:", filterMeetingsByType("regular"));

console.log("Testimony Meetings:", filterMeetingsByType("testimony"));

console.log("Stake Meetings:", filterMeetingsByType("stake"));

console.log("General Meetings:", filterMeetingsByType("general"));
