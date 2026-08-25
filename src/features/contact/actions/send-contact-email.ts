'use server'

import { Resend } from 'resend'
import {
  contactFormSchema,
  ContactFormInput,
  ContactActionResult,
} from '../schemas/contact.schema'

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function sendContactEmail(
  input: ContactFormInput
): Promise<ContactActionResult> {
  try {
    // 1. Server-side validation using Zod
    const validationResult = contactFormSchema.safeParse(input)

    if (!validationResult.success) {
      return {
        success: false,
        message: 'Invalid input. Please check the form fields.',
        errors: validationResult.error.flatten().fieldErrors,
      }
    }

    const { name, email, subject, message, hp_field, renderedAt } =
      validationResult.data

    // 2. Anti-Bot Defense 1: Honeypot Trap
    // If the hidden field contains any value, silent drop (pretend success to deceive bots)
    if (hp_field && hp_field.trim().length > 0) {
      console.warn('[Contact Action] Honeypot triggered, submission silently discarded.')
      return { success: true, message: 'Message sent successfully.' }
    }

    // 3. Anti-Bot Defense 2: Submission Timing Trap
    // Forms submitted in less than 1.2 seconds are almost certainly automated scripts
    if (renderedAt && Date.now() - renderedAt < 1200) {
      console.warn('[Contact Action] Fast submission detected (< 1.2s), submission discarded.')
      return { success: true, message: 'Message sent successfully.' }
    }

    // 4. Check Resend API Key configuration
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error(
        '[Contact Action] CRITICAL: RESEND_API_KEY is not defined in environment variables.'
      )
      return {
        success: false,
        message:
          'Email service is temporarily unavailable. Please email directly at muhammadhafidzz133@gmail.com.',
      }
    }

    const resend = new Resend(apiKey)

    const recipientEmail =
      process.env.CONTACT_RECEIVER_EMAIL || 'muhammadhafidzz133@gmail.com'
    const senderEmail =
      process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>'

    const sanitizedName = escapeHtml(name)
    const sanitizedEmail = escapeHtml(email)
    const sanitizedSubject = escapeHtml(subject)
    const sanitizedMessage = escapeHtml(message).replace(/\n/g, '<br />')

    // 5. Dispatch email via Resend SDK
    const { error } = await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: `[Portfolio Contact] ${subject} - from ${name}`,
      text: `New message from ${name} (${email}):\n\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; margin: 0; padding: 24px; background-color: #f8fafc; }
              .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; padding: 32px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
              .header { border-bottom: 2px solid #0ea5e9; padding-bottom: 16px; margin-bottom: 24px; }
              .title { font-size: 20px; font-weight: 700; color: #0f172a; margin: 0; }
              .meta-item { margin-bottom: 12px; font-size: 14px; }
              .meta-label { font-weight: 600; color: #64748b; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em; }
              .meta-value { color: #0f172a; margin-top: 2px; }
              .message-box { background-color: #f1f5f9; border-left: 4px solid #0ea5e9; padding: 16px; border-radius: 4px; margin-top: 20px; font-size: 15px; color: #334155; }
              .footer { margin-top: 32px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 16px; }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="header">
                <h1 class="title">New Contact Form Submission</h1>
              </div>
              <div class="meta-item">
                <div class="meta-label">Sender Name</div>
                <div class="meta-value">${sanitizedName}</div>
              </div>
              <div class="meta-item">
                <div class="meta-label">Sender Email</div>
                <div class="meta-value"><a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></div>
              </div>
              <div class="meta-item">
                <div class="meta-label">Subject Category</div>
                <div class="meta-value">${sanitizedSubject}</div>
              </div>
              <div class="meta-item">
                <div class="meta-label">Message Content</div>
                <div class="message-box">${sanitizedMessage}</div>
              </div>
              <div class="footer">
                This email was sent from your portfolio contact form. You can reply directly to this email to respond to ${sanitizedName}.
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('[Contact Action] Resend API Error:', error)
      return {
        success: false,
        message: 'Failed to deliver message via email service. Please try again later.',
      }
    }

    return {
      success: true,
      message: 'Your message has been sent successfully.',
    }
  } catch (err) {
    console.error('[Contact Action] Unexpected Error:', err)
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
    }
  }
}
