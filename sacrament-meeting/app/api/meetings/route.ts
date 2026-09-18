import { getAllMeetings } from "@/lib/meetings-db";

export async function GET() {
    try {
        const meetings = await getAllMeetings();

        return new Response(JSON.stringify(meetings), {
            headers: {
            "Content-Type": "application/json"
            }
        });
    } catch (error) {
        // Error 500: Internal Server Error
        return new Response(JSON.stringify({ error: "Failed to fetch meetings" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}