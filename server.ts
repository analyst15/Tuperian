import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Memory store for consultation requests
interface ConsultationBooking {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  teamSize: string;
  servicesNeeded: string[];
  notes?: string;
  preferredDate: string;
  preferredTime: string;
  createdAt: string;
  status: 'Received' | 'Assigned' | 'Consultation Scheduled';
}

const consultationStore: ConsultationBooking[] = [
  {
    id: 'TUP-2026-1042',
    name: 'Sarah Jenkins',
    company: 'Apex Dental Partners',
    email: 'sarah@apexdental.com',
    phone: '(555) 234-8901',
    industry: 'Healthcare & Medical',
    teamSize: '15-25 employees',
    servicesNeeded: ['Cyber Security', 'IT Consultancy', 'Data Analysis'],
    notes: 'Need HIPAA compliance audit and cloud backup migration.',
    preferredDate: '2026-08-10',
    preferredTime: '10:00 AM',
    createdAt: new Date().toISOString(),
    status: 'Consultation Scheduled'
  }
];

// Helper to initialize Gemini client safely
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build'
      }
    }
  });
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', agency: 'Tuperian Agency' });
});

// AI IT & Security Strategy Advisor endpoint
app.post('/api/advisor', async (req, res) => {
  try {
    const { industry, teamSize, primaryGoal, currentTech, securityConcern, budget } = req.body;

    const ai = getGeminiClient();

    if (!ai) {
      // Fallback structured response if API key is not configured
      return res.json({
        success: true,
        source: 'fallback',
        roadmap: {
          summary: `Strategic IT & Digital Transformation Plan for ${industry || 'Small Business'} (${teamSize || '10-20 staff'}).`,
          itInfrastructure: [
            "Migrate legacy on-premise file shares to encrypted cloud storage with strict Role-Based Access Control (RBAC).",
            "Deploy Automated Cloud Backup with 15-minute snapshot frequency and 99.99% disaster recovery SLA.",
            "Establish unified Single Sign-On (SSO) and Centralized Mobile Device Management (MDM)."
          ],
          cyberSecurity: [
            "Implement mandatory Multi-Factor Authentication (MFA) across all email and SaaS accounts.",
            "Conduct quarterly phishing simulation training for team members.",
            "Deploy Next-Gen Endpoint Detection and Response (EDR) with 24/7 AI threat containment."
          ],
          webAndApp: [
            "Upgrade client-facing web application to a modern high-performance React architecture with SSL hardening.",
            "Build custom client portal to streamline appointment bookings, document sharing, and status tracking."
          ],
          marketingAndData: [
            "Implement Local Business SEO & Google Business Profile optimization to capture high-intent local clients.",
            "Create an executive Power BI/Looker dashboard tracking monthly recurring revenue, client acquisition cost, and staff utilization."
          ],
          roiEstimate: "Estimated 25%-35% reduction in IT maintenance overhead and 99.99% mitigation against ransomware risks."
        }
      });
    }

    const prompt = `You are the Lead Technology Strategist at Tuperian Agency, an elite IT consultancy specializing in Small Businesses.
Analyze the following client details and produce a tailored, highly actionable 4-part IT & Digital Strategy Roadmap:

Client Context:
- Industry: ${industry || 'Small Business'}
- Team Size: ${teamSize || '10-25'}
- Primary Business Goal: ${primaryGoal || 'Improve efficiency and secure customer data'}
- Current Tech Stack & Pain Points: ${currentTech || 'Mixed legacy tools and manual spreadsheets'}
- Security Concerns: ${securityConcern || 'Ransomware, data loss, compliance'}
- Budget Tier: ${budget || 'Growth Tier'}

Please respond in valid JSON format matching this exact schema:
{
  "summary": "Concise executive overview tailored to this business",
  "itInfrastructure": ["Point 1", "Point 2", "Point 3"],
  "cyberSecurity": ["Point 1", "Point 2", "Point 3"],
  "webAndApp": ["Point 1", "Point 2"],
  "marketingAndData": ["Point 1", "Point 2"],
  "roiEstimate": "Specific operational savings and revenue growth projection"
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        systemInstruction: 'You are an authoritative, practical IT consultant for small businesses. Keep recommendations specific, realistic, and highly professional.'
      }
    });

    const responseText = response.text || '';
    const parsedData = JSON.parse(responseText);

    return res.json({
      success: true,
      source: 'gemini',
      roadmap: parsedData
    });
  } catch (error: any) {
    console.error('Error generating AI strategy:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to generate IT strategy roadmap. Please try again.',
      details: error?.message || String(error)
    });
  }
});

// Endpoint to book consultation or submit RFP
app.post('/api/consultation', (req, res) => {
  const { name, company, email, phone, industry, teamSize, servicesNeeded, notes, preferredDate, preferredTime } = req.body;

  if (!name || !email || !company) {
    return res.status(400).json({ success: false, error: 'Name, company, and email are required.' });
  }

  const newBooking: ConsultationBooking = {
    id: `TUP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
    name,
    company,
    email,
    phone: phone || 'N/A',
    industry: industry || 'Small Business',
    teamSize: teamSize || '1-10 employees',
    servicesNeeded: Array.isArray(servicesNeeded) ? servicesNeeded : [servicesNeeded || 'General IT Consultation'],
    notes: notes || '',
    preferredDate: preferredDate || new Date().toISOString().split('T')[0],
    preferredTime: preferredTime || '10:00 AM',
    createdAt: new Date().toISOString(),
    status: 'Received'
  };

  consultationStore.unshift(newBooking);

  return res.json({
    success: true,
    message: 'Consultation request successfully recorded. A Tuperian senior consultant will review your request within 2 business hours.',
    booking: newBooking
  });
});

// Endpoint to fetch client consultation requests
app.get('/api/consultations', (req, res) => {
  const { email } = req.query;
  if (email) {
    const userBookings = consultationStore.filter(
      b => b.email.toLowerCase() === String(email).toLowerCase()
    );
    return res.json({ success: true, bookings: userBookings });
  }
  return res.json({ success: true, bookings: consultationStore });
});

// Setup Vite Dev Server / Production Static Middleware
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Tuperian Agency server running on http://localhost:${PORT}`);
  });
}

startServer();
