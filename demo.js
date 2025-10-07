import 'dotenv/config'; 
import Groq from "groq-sdk";
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const HELICONE_API_KEY = process.env.HELICONE_API_KEY;

if (!GROQ_API_KEY || !HELICONE_API_KEY) {
    console.error("❌ Error: Pastikan Anda sudah membuat file .env dan mengisi GROQ_API_KEY serta HELICONE_API_KEY.");
    process.exit(1); 
}

const groq = new Groq({
    apiKey: GROQ_API_KEY,
    baseURL: "https://groq.hconeai.com",
    defaultHeaders: {
        "Helicone-Auth": `Bearer ${HELICONE_API_KEY}`
    }
});

async function main() {
    const rl = readline.createInterface({ input, output });

    try {
        const userPrompt = await rl.question('👉 Masukkan prompt Anda: ');
        
        if (!userPrompt.trim()) {
            console.log("Tidak ada prompt yang dimasukkan. Program berhenti.");
            return;
        }
        
        console.log("\n🔄 Mengirim permintaan ke Groq MELALUI HELICONE...");

        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: userPrompt,
                },
            ],
            model: "openai/gpt-oss-120b", 
        });

        const jawaban = chatCompletion.choices[0]?.message?.content || "Tidak ada jawaban.";
        console.log("\n✅ Jawaban dari Groq:\n-------------------\n", jawaban);

    } catch (error) {
        console.error("Terjadi error:", error.message);
    } finally {
        rl.close();
    }
}

main();