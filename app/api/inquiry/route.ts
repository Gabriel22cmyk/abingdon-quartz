import { NextRequest, NextResponse } from 'next/server'

// For now, we'll log inquiries. Update with your email service later.
// You can use SendGrid, Resend, AWS SES, or any email service.

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, quartzName } = body

    // Validate input
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // TODO: Integrate with email service
    // Option 1: Use Resend (https://resend.com)
    // Option 2: Use SendGrid API
    // Option 3: Use nodemailer with SMTP
    // Option 4: Use Vercel's built-in email (if available)

    // For now, log to console and return success
    console.log('New Inquiry:', {
      name,
      email,
      phone,
      message,
      quartzName,
      timestamp: new Date().toISOString(),
    })

    // TODO: Remove this and implement actual email sending
    // Example with Resend:
    /*
    import { Resend } from 'resend';
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'inquiries@abingdon-quartz.co.uk',
      to: 'abingdon.quartzworktops@gmail.com',
      subject: `New Inquiry from ${name} - ${quartzName}`,
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Selected Design:</strong> ${quartzName}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No additional message'}</p>
      `,
    });
    */

    return NextResponse.json(
      { success: true, message: 'Inquiry received' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing inquiry:', error)
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    )
  }
}
