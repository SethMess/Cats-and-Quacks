// Importing necessary modules
import { serve } from "https://deno.land/std@0.198.0/http/server.ts";

// Define the URL of the Cat as a Service API
const CATAAS_URL = "https://cataas.com/cat";

// Serve the Deno server on port 8000
serve(async (req) => {
    // Fetch the image from the CATAAS API
    const response = await fetch(CATAAS_URL);

    // If the response is not OK, return a 500 error
    if (!response.ok) {
        return new Response("Failed to fetch the image", { status: 500 });
    }

    // Return the fetched image
    const imageBlob = await response.blob();
    return new Response(imageBlob, {
        status: 200,
        headers: {
            "Content-Type": "image/jpeg",
        },
    });
}, { port: 8000 });

console.log("Server running on http://localhost:8000");
