"use server";

import { neon } from "@neondatabase/serverless";
import { revalidatePath } from "next/cache";
import type { SacramentMeeting } from "./types";

const sql = neon(process.env.DATABASE_URL!);

export async function createProject(meeting: Omit<SacramentMeeting, "id">) {
  await sql`
    INSERT INTO meetings (
      date,
      meeting_type,
      presiding,
      conducting,
      announcements,
      opening_hymn,
      opening_prayer,
      ward_business,
      stake_business,
      sacrament_hymn,
      speakers,
      closing_hymn,
      closing_prayer
    ) VALUES (
      ${meeting.date},
      ${meeting.meetingType},
      ${meeting.presiding},
      ${meeting.conducting},
      ${meeting.announcements ?? []},
      ${JSON.stringify(meeting.openingHymn)}::jsonb,
      ${meeting.openingPrayer},
      ${JSON.stringify(meeting.wardBusiness)}::jsonb,
      ${meeting.stakeBusiness},
      ${JSON.stringify(meeting.sacramentHymn)}::jsonb,
      ${JSON.stringify(meeting.speakers)}::jsonb,
      ${JSON.stringify(meeting.closingHymn)}::jsonb,
      ${meeting.closingPrayer}
    )
  `;

  revalidatePath("/meetings");
}

export async function deleteProject(id: string) {
  await sql`DELETE FROM projects WHERE id = ${id}`;
  revalidatePath("/projects");
}
