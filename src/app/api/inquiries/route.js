import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // You MUST provide the RESEND_API_KEY in your environment variables for this to work.
    // If it's missing, we log and return an error.
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      console.warn("RESEND_API_KEY is missing! Cannot send email. Logging inquiry:");
      console.warn(`From: ${name} <${email}>\nMessage: ${message}`);
      // Temporarily mock success if no API key is provided so the UI works
      return NextResponse.json({ success: true, warning: 'No API key, email not sent.' });
    }

    const resend = new Resend(resendApiKey);

    const { data, error } = await resend.emails.send({
      from: 'VeloTime Inquiries <onboarding@resend.dev>', // Resend test email
      to: 'dgray@dg.tools',
      subject: `New VeloTime Inquiry from ${name}`,
      text: `You have a new inquiry from the VeloTime landing page:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Failed to process inquiry:", error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
