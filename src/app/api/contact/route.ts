import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_Jnv5Z49m_GLzTV6ujqiPZZ4uQDW3EPcnN"); // 🔒


export async function POST(req: Request) {
    const body = await req.json();
    console.log("Received body:", body); // ✅
  
    const { name, email, message } = body;
  
    try {
      const data = await resend.emails.send({
        from: "ADNOXY Contact Form <onboarding@resend.dev>",
        to: "kumarnitin30121@gmail.com",
        subject: "New Contact Form Submission",
        html: `
          <h3>New Message from ADNOXY</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });
  
      console.log("Email sent:", data); // ✅
      return NextResponse.json({ success: true, data });
    } catch (error) {
      console.error("Email send error:", error); // ✅
      return NextResponse.json({ success: false, error });
    }
  }
  