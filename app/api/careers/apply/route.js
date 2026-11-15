import { NextResponse } from 'next/server';
import pool from '@/lib/db'; // Agar import error aaye toh relative path use karo jaise '../../../../lib/db'
import fs from 'fs';
import path from 'path';

// CORS Headers (Taaki agar website aur dashboard alag ports par hon tab bhi error na aaye)
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// 1. POST: Form Data Save Karne Ke Liye
export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get('name');
    const mobile = formData.get('mobile');
    const email = formData.get('email');
    const qualification = formData.get('qualification');
    const jobTitle = formData.get('jobTitle');
    const expYears = formData.get('expYears') || '0';
    const expMonths = formData.get('expMonths') || '0';
    const resume = formData.get('resume');

    if (!name || !email || !mobile || !jobTitle) {
      return NextResponse.json(
        { success: false, message: 'Please fill all required fields.' },
        { status: 400, headers: corsHeaders }
      );
    }

    let resumeUrl = null;

    if (resume && typeof resume === 'object' && resume.size > 0) {
      const buffer = Buffer.from(await resume.arrayBuffer());
      const filename = `${Date.now()}-${resume.name.replace(/\s+/g, '_')}`;
      const uploadDir = path.join(process.cwd(), 'public/uploads');

      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      fs.writeFileSync(path.join(uploadDir, filename), buffer);
      resumeUrl = `/uploads/${filename}`;
    }

    const query = `
      INSERT INTO applications (name, mobile, email, qualification, jobTitle, expYears, expMonths, resumeUrl)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [name, mobile, email, qualification, jobTitle, expYears, expMonths, resumeUrl];

    const [result] = await pool.query(query, values);

    return NextResponse.json(
      { success: true, message: 'Application saved!', id: result.insertId },
      { status: 201, headers: corsHeaders }
    );
  } catch (error) {
    console.error('SQL INSERT ERROR:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Database error' },
      { status: 500, headers: corsHeaders }
    );
  }
}

// 2. GET: Dashboard Par Data Dikhane Ke Liye
export async function GET() {
  try {
    const [rows] = await pool.query('SELECT * FROM applications ORDER BY created_at DESC');
    return NextResponse.json(
      { success: true, data: rows },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error('SQL FETCH ERROR:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Fetch error' },
      { status: 500, headers: corsHeaders }
    );
  }
}