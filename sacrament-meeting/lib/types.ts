// Define the types of meetings
export type MeetingType = "testimony" | "regular" | "stake" | "general";

// Define the structure of a hymn
export interface Hymn {
  number: number;
  title: string;
}

// Define the structure of a speaker item
export interface SpeakerItem {
  name: string;
  topic: string;
  type: "speaker" | "musical-number";
}

// Define the structure of a ward business item
export interface WardBusinessItem {
  description: string;
}

// Define the structure of a sacrament meeting
export interface SacramentMeeting {
  id: number;
  date: string;
  meetingType: MeetingType;
  presiding: string;
  conducting: string;
  announcements?: string[];
  openingHymn: Hymn;
  openingPrayer: string;
  wardBusiness: WardBusinessItem[];
  stakeBusiness: boolean;
  sacramentHymn: Hymn;
  speakers: SpeakerItem[];
  closingHymn: Hymn;
  closingPrayer: string;
}
