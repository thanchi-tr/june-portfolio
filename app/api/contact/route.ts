import { Resend } from "resend";

export const runtime = "edge";

const resend = new Resend("re_iN63cWBJ_LGaSRiBWgZmdzZgEtzr6kPH4");

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const sydneyTime = new Intl.DateTimeFormat("en-AU", {
      timeZone: "Australia/Sydney",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // Use 24-hour format
    }).format(Date.now());
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "dev.xuan.trinh@outlook.com",
      subject: `Contact Form Submission from ${name} , @TIME:    ${sydneyTime}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}
