import nodemailer from 'nodemailer';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { log } from 'console';
import os from 'os';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // const uploadDir = path.join(process.cwd(), '/public/uploads');
  const uploadDir = path.join(os.tmpdir(), 'uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const form = formidable({
    multiples: false,
    keepExtensions: true,
    uploadDir,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Form parsing error:', err);
      return res.status(500).json({ message: 'Form parsing error' });
    }

    const {
      fullName,
      email,
      phone,
      country,
      city,
      role,
      currentSalary,
      expectedSalary,
      linkedin,
      skills,
    } = fields;

    const resume = Array.isArray(files.resume) ? files.resume[0] : files.resume;
    console.log("resume",resume);
    console.log("files",files);
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      const mailOptions = {
        from: process.env.SMTP_FROM || email,
        to: process.env.SMTP_TO || process.env.SMTP_USER,
        subject: `Opportunities Form Submission from ${fullName || email}`,
        text: `Name: ${fullName || ''}\nEmail: ${email}\nPhone: ${phone || ''}\nCountry: ${country || ''}\nCity: ${city || ''}\nRole: ${role || ''}\nCurrent Salary: ${currentSalary || ''}\nExpected Salary: ${expectedSalary || ''}\nLinkedIn: ${linkedin || ''}\nSkills: ${skills || ''}`,
        html: `
          <h3>New Submission</h3>
          <p><strong>Name:</strong> ${fullName || ''}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || ''}</p>
          <p><strong>Country:</strong> ${country || ''}</p>
          <p><strong>City:</strong> ${city || ''}</p>
          <p><strong>Role:</strong> ${role || ''}</p>
          <p><strong>Current Salary:</strong> ${currentSalary || ''}</p>
          <p><strong>Expected Salary:</strong> ${expectedSalary || ''}</p>
          <p><strong>LinkedIn:</strong> ${linkedin || ''}</p>
          <p><strong>Skills:</strong> ${skills || ''}</p>
        `,
        attachments: [],
      };

      // Attach resume only if file exists
      // if (resume?.filepath && fs.existsSync(resume.filepath)) {
      //   mailOptions.attachments.push({
      //     filename: resume.originalFilename || 'resume.pdf',
      //     content: fs.readFileSync(resume.filepath),
      //     contentType: resume.mimetype || 'application/pdf',
      //   });
      // }
      if (resume?.filepath && fs.existsSync(resume.filepath)) {
        const fileBuffer = fs.readFileSync(resume.filepath);
      
        mailOptions.attachments.push({
          filename: resume.originalFilename || 'resume.pdf',
          content: Buffer.from(fileBuffer),
          contentType: resume.mimetype || 'application/pdf',
        });
      }
      

      await transporter.sendMail(mailOptions);

      // Remove uploaded file
      if (resume?.filepath && fs.existsSync(resume.filepath)) {
        fs.unlinkSync(resume.filepath);
      }

      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Email send error:', error);
      return res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
  });
}
