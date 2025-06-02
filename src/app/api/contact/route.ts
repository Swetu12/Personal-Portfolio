import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  try {
    const { email, name, message } = await request.json();

    if (!email || !name || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.MY_EMAIL}>`,
      to: process.env.MY_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #007bff;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
            <p><strong>Message:</strong></p>
            <blockquote style="background: #f8f9fa; padding: 10px; border-left: 4px solid #007bff;">
                ${message}
            </blockquote>
            <p>Best regards,<br>${name}</p>
        </div>
    `,
    };

    const sendMailPromise = () =>
      new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
            console.error("Error sending email:", err);
            reject(err);
          } else {
            resolve(info.response);
          }
        });
      });

    const emailResponse = await sendMailPromise();
    return NextResponse.json({
      message: "Email Sent",
      response: emailResponse,
    });
  } catch (err: any) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: err.message || "Internal Server Error" },
      { status: 500 },
    );
  }
}
