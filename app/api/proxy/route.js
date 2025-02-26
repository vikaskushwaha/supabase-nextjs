
import fs from "fs";
import path from "path";
import FormData from "form-data";
import axios from "axios";
export async function POST(req) {
    try {
        console.log(req);
        const { challenges, goals } = await req.json();
        if (!fs || !path) {
            return new Response(JSON.stringify({ error: "File system not available in Edge runtime" }), { status: 500 });
        }
        const filePath = path.join(process.cwd(), "public", "demo.pdf");
        if (!fs.existsSync(filePath)) {
            return new Response(JSON.stringify({ error: "File not found" }), { status: 404 });
        }
        const fileStream = fs.createReadStream(filePath);
        const formData = new FormData();
        formData.append("files", fileStream, "demo.pdf");
        formData.append("context", `use the extracted content for your response\n challenges:${challenges}\n goals:${goals}`);
        formData.append("instruction", "what are the recommendations");
        const response = await axios.post("https://api.vybri.work/llm_chat_with_file/", formData, {
            headers: {
                ...formData.getHeaders(),
                "api-key": "VybriR0cks",
            },
        });

        return new Response(JSON.stringify(response.data), { status: 200 });
    } catch (error) {
        console.error("Upload error:", error.response?.data || error.message);
        return new Response(JSON.stringify({ error: error.response?.data || error.message }), { status: 500 });
    }
}