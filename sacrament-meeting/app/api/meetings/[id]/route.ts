import { getMeetingById } from "@/lib/meetings-db";

export default async function GET(
    _request: Request,
    { params }: { params: Promise<{ id: string }> }
) {

    try {
        const { id } = await params;
        const meeting = getMeetingById(Number(id));

        if (!meeting) {
            return new Response(JSON.stringify({ error: "Meeting not found" }), {
                status: 404,
                headers: {
                    "Content-Type": "application/json"
                }
            });
        }

        return new Response(JSON.stringify(meeting), {
            headers: {
            "Content-Type": "application/json"
            }
        });
    } catch (error) {

        // Error 404: Not Found
        if (error instanceof Error && error.message === "Meetings not found") {
            return new Response(JSON.stringify({ error: "Meeting not found" }), {
                status: 404,
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }
        // Error 400: Bad Request
        if (error instanceof Error && error.message === "Invalid request") {
            return new Response(JSON.stringify({ error: "Invalid request" }), {
                status: 400,
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }
        // Error 500: Internal Server Error
        return new Response(JSON.stringify({ error: "Failed to fetch meeting" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}