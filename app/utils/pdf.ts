import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export const generateResumePDF = () => {
  const doc = new jsPDF();
  
  // Add header
  doc.setFontSize(24);
  doc.text('Alex Chen', 20, 20);
  doc.setFontSize(12);
  doc.text('Full Stack Developer', 20, 30);
  
  // Add contact info
  doc.setFontSize(10);
  doc.text('Email: alex@example.com', 20, 40);
  doc.text('Phone: (123) 456-7890', 20, 45);
  doc.text('Location: San Francisco, CA', 20, 50);
  
  // Add professional summary
  doc.setFontSize(14);
  doc.text('Professional Summary', 20, 65);
  doc.setFontSize(10);
  const summary = 'Experienced Full Stack Developer with 5+ years of expertise in building responsive web applications and mobile solutions. Proficient in modern JavaScript frameworks, server-side technologies, and database systems. Passionate about creating intuitive user experiences and writing clean, maintainable code.';
  doc.text(summary, 20, 75, { maxWidth: 170 });
  
  // Add work experience
  doc.setFontSize(14);
  doc.text('Work Experience', 20, 100);
  doc.setFontSize(10);
  
  const workExperience = [
    {
      role: 'Senior Full Stack Developer',
      company: 'TechNova Solutions',
      period: '2021 - Present',
      location: 'San Francisco, CA',
      responsibilities: [
        'Lead development of enterprise web applications using React, Node.js, and AWS',
        'Architected and implemented microservices-based backend systems',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines resulting in 40% faster deployment cycles',
        'Optimized application performance and reduced load times by 35%'
      ]
    },
    {
      role: 'Frontend Developer',
      company: 'Digital Dynamics',
      period: '2019 - 2021',
      location: 'San Francisco, CA',
      responsibilities: [
        'Developed responsive web applications using React and Vue.js',
        'Collaborated with UX designers to implement pixel-perfect interfaces',
        'Optimized frontend performance and accessibility',
        'Integrated RESTful APIs and GraphQL endpoints',
        'Participated in agile development processes and sprint planning'
      ]
    }
  ];
  
  let yPos = 110;
  workExperience.forEach((job, index) => {
    doc.setFontSize(12);
    doc.text(job.role, 20, yPos);
    doc.setFontSize(10);
    doc.text(`${job.company} | ${job.location} | ${job.period}`, 20, yPos + 5);
    
    job.responsibilities.forEach((resp, i) => {
      doc.text(`• ${resp}`, 25, yPos + 15 + (i * 5));
    });
    
    yPos += 25 + (job.responsibilities.length * 5);
  });
  
  // Add skills
  doc.setFontSize(14);
  doc.text('Skills', 20, yPos + 10);
  doc.setFontSize(10);
  
  const skills = [
    'JavaScript/TypeScript', 'React/Next.js', 'Node.js', 'HTML/CSS',
    'SQL/NoSQL Databases', 'AWS/Cloud Services', 'Git', 'CI/CD',
    'Agile/Scrum', 'UI/UX Design', 'RESTful APIs', 'GraphQL',
    'Docker', 'Kubernetes', 'Testing (Jest, Cypress)'
  ];
  
  let xPos = 20;
  let currentY = yPos + 20;
  skills.forEach((skill, index) => {
    if (xPos > 150) {
      xPos = 20;
      currentY += 10;
    }
    doc.text(`• ${skill}`, xPos, currentY);
    xPos += 60;
  });
  
  // Save the PDF
  doc.save('Ashish_Kumar_resume.pdf');
}; 