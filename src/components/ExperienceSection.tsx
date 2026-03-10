"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Building2, GraduationCap } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export function ExperienceSection() {
  const ref = useRef(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { currentTheme } = useTheme();

  const experiences = [
    {
      company: "Celebal Technologies",
      role: "React Developer - Jaipur",
      period: "Aug 2021 - Oct 2022",
      description:
        "Designed and developed an intelligent multilingual chatbot for comprehensive banking services and customer support.",
      achievements: [
        "Built CT Bankbot, a 24/7 multilingual banking chatbot with voice input support",
        "Implemented core banking features: payment processing, transfers, mobile recharges, and loan applications",
        "Developed account management features including chequebook, debit card, and credit card requests",
        "Integrated seamless escalation system to live agents for complex banking issues",
      ],
      skills: ["React", "Node.js", "API Integration", "Chatbot Development"],
    },
    {
      company: "Shiv Technolabs",
      role: "React Developer - Ahmedabad",
      period: "Jan 2023 - July 2023",
      description:
        "Developed a comprehensive Business Process Management system for government license and examination form submissions.",
      achievements: [
        "Built BPM, a multi-role government-focused web application with 5 distinct user modules",
        "Implemented dynamic form builder with custom components (text fields, maps, file uploads, QR/barcode)",
        "Developed role-based access control for Super Admin, Tenant, Super User, User, and Citizen roles",
        "Integrated payment tracking and real-time form submission using React and Laravel APIs",
      ],
      skills: ["React", "PHP (Laravel)", "MySQL", "REST APIs"],
    },
    {
      company: "Atlantick Solutions",
      role: "React Developer - Udaipur",
      period: "Apr 2025 - Dec 2025",
      description:
        "Developed architectural project management platform and calendar-based scheduling application.",
      achievements: [
        "Built Archudo, an all-in-one platform for architectural project management and team collaboration",
        "Developed Trak Calendar with drag-and-drop scheduling, real-time updates, and advanced filtering",
        "Implemented interactive UI components with React and Tailwind CSS for responsive design",
        "Integrated Laravel backend APIs for secure data flow and efficient state management",
      ],
      skills: ["React", "Vanilla JS", "PHP (Laravel)", "Tailwind CSS"],
    },
  ];

  const education = [
    {
      institution: "Mohanlal Sukhadia University",
      degree: "Bachelor of Computer Applications (CGPA: 6.5/10)",
      year: "2018 - 2021",
    },
    {
      institution: "Central Public School",
      degree: "12th Commerce (CGPA: 5.9/10)",
      year: "2017-18",
    },
    {
      institution: "Central Public School",
      degree: "10th Grade (CGPA: 7.2/10)",
      year: "2015-16",
    },
  ];

  const certificates = [
    {
      name: "React Development",
      issuer: "Professional Certification",
      year: "2023",
    },
    {
      name: "JavaScript Advanced",
      issuer: "Web Development Course",
      year: "2022",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-28 md:py-36"
      style={{
        backgroundColor: currentTheme.colors.primaryLight,
        backgroundImage: `radial-gradient(circle at 20% 50%, ${currentTheme.colors.accent}08 0%, transparent 50%)`,
      }}
    >
      <div ref={ref} className="max-w-[1200px] mx-auto px-8 md:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="font-['Montserrat'] uppercase tracking-[3px] mb-4"
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: currentTheme.colors.accent,
            }}
          >
            Journey
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-['Cormorant_Garamond'] max-w-[720px] mx-auto mb-5"
            style={{
              fontSize: "clamp(36px, 6vw, 48px)",
              fontWeight: 600,
              color: currentTheme.colors.text,
              letterSpacing: "-0.3px",
              lineHeight: 1.3,
            }}
          >
            Professional Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-['Montserrat'] max-w-[640px] mx-auto"
            style={{
              fontSize: "16px",
              color: currentTheme.colors.textSecondary,
            }}
          >
            Where I've grown and contributed to meaningful projects
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 hidden md:block"
            style={{ backgroundColor: currentTheme.colors.accent, transform: "translateX(-50%)" }}
          />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.2 }}
                className={`relative md:w-[calc(50%-40px)] ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
                data-obstacle
              >
                {/* Timeline Dot - Perfectly Centered */}
                <div
                  className="absolute top-8 w-4 h-4 rounded-full hidden md:block"
                  style={{
                    backgroundColor: currentTheme.colors.accent,
                    boxShadow: `0 0 0 4px ${currentTheme.colors.primaryLight}, 0 0 12px ${currentTheme.colors.accent}99`,
                    [index % 2 === 0 ? "right" : "left"]: "-40px",
                    transform: index % 2 === 0 ? "translateX(50%)" : "translateX(-50%)",
                  }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="p-9 rounded-2xl cursor-pointer"
                  style={{
                    backdropFilter: "blur(14px) saturate(150%)",
                    border: `1px solid ${currentTheme.colors.accent}33`,
                    boxShadow: `0 8px 40px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.06)`,
                    background: `linear-gradient(135deg, ${currentTheme.colors.primary}40 0%, ${currentTheme.colors.primaryLight}60 100%)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${currentTheme.colors.accent}99`;
                    e.currentTarget.style.boxShadow = `0 16px 64px ${currentTheme.colors.accent}33, inset 0 2px 0 rgba(255, 255, 255, 0.12)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${currentTheme.colors.accent}33`;
                    e.currentTarget.style.boxShadow = `0 8px 40px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.06)`;
                  }}
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="p-3 rounded-lg"
                      style={{
                        backgroundColor: `${currentTheme.colors.accent}1A`,
                        border: `1px solid ${currentTheme.colors.accent}33`,
                      }}
                    >
                      <Building2 size={24} color={currentTheme.colors.accent} />
                    </div>
                    <div className="flex-1">
                      <div
                        className="font-['Montserrat'] mb-2"
                        style={{
                          fontSize: "12px",
                          fontWeight: 500,
                          color: currentTheme.colors.accent,
                          letterSpacing: "1px",
                        }}
                      >
                        {exp.period}
                      </div>
                      <h3
                        className="font-['Cormorant_Garamond'] mb-2"
                        style={{
                          fontSize: "24px",
                          fontWeight: 600,
                          color: currentTheme.colors.text,
                        }}
                      >
                        {exp.role}
                      </h3>
                      <p
                        className="font-['Montserrat']"
                        style={{
                          fontSize: "14px",
                          color: currentTheme.colors.textSecondary,
                        }}
                      >
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <p
                    className="font-['Montserrat'] mb-5"
                    style={{
                      fontSize: "15px",
                      color: currentTheme.colors.textSecondary,
                      lineHeight: 1.7,
                    }}
                  >
                    {exp.description}
                  </p>

                  <div className="mb-5">
                    <h4
                      className="font-['Montserrat'] mb-3"
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: currentTheme.colors.text,
                      }}
                    >
                      Key Achievements:
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: currentTheme.colors.accent }}
                          />
                          <span
                            className="font-['Montserrat']"
                            style={{
                              fontSize: "14px",
                              color: currentTheme.colors.text,
                              lineHeight: 1.9,
                            }}
                          >
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-md font-['Montserrat']"
                        style={{
                          border: `1px solid ${currentTheme.colors.accent}`,
                          fontSize: "12px",
                          color: currentTheme.colors.accent,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-24"
        >
          <h3
            className="font-['Cormorant_Garamond'] text-center mb-12"
            style={{
              fontSize: "32px",
              fontWeight: 600,
              color: currentTheme.colors.text,
            }}
          >
            Education & Certifications
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="p-6 rounded-xl text-center glass-water liquid-shimmer transition-all duration-500"
                style={{
                  backdropFilter: "blur(12px) saturate(150%)",
                  border: `1px solid ${currentTheme.colors.accent}33`,
                  boxShadow: `0 4px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.06)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${currentTheme.colors.accent}66`;
                  e.currentTarget.style.boxShadow = `0 12px 32px ${currentTheme.colors.accent}44, inset 0 1px 0 rgba(255, 255, 255, 0.1)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${currentTheme.colors.accent}33`;
                  e.currentTarget.style.boxShadow = `0 4px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.06)`;
                }}
                data-obstacle
              >
                <div
                  className="inline-flex p-3 rounded-full mb-4"
                  style={{
                    backgroundColor: `${currentTheme.colors.accent}1A`,
                  }}
                >
                  <GraduationCap size={28} color={currentTheme.colors.accent} />
                </div>
                <h4
                  className="font-['Cormorant_Garamond'] mb-2"
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: currentTheme.colors.text,
                  }}
                >
                  {edu.degree}
                </h4>
                <p
                  className="font-['Montserrat'] mb-2"
                  style={{
                    fontSize: "14px",
                    color: currentTheme.colors.textSecondary,
                  }}
                >
                  {edu.institution}
                </p>
                <p
                  className="font-['Montserrat']"
                  style={{
                    fontSize: "13px",
                    color: currentTheme.colors.accent,
                    fontWeight: 500,
                  }}
                >
                  {edu.year}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Certificates Section */}
          {certificates.length > 0 && (
            <div className="mt-12">
              <h4
                className="font-['Montserrat'] text-center mb-8"
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: currentTheme.colors.accent,
                  letterSpacing: "0.5px",
                }}
              >
                Professional Certifications
              </h4>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.5 + index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="p-5 rounded-xl glass-water liquid-shimmer transition-all duration-300"
                    style={{
                      backdropFilter: "blur(12px) saturate(150%)",
                      border: `1px solid ${currentTheme.colors.accent}33`,
                      boxShadow: `0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.06)`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${currentTheme.colors.accent}66`;
                      e.currentTarget.style.boxShadow = `0 8px 24px ${currentTheme.colors.accent}33, inset 0 1px 0 rgba(255, 255, 255, 0.1)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `${currentTheme.colors.accent}33`;
                      e.currentTarget.style.boxShadow = `0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.06)`;
                    }}
                    data-obstacle
                  >
                    <h5
                      className="font-['Montserrat'] mb-1"
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: currentTheme.colors.text,
                      }}
                    >
                      {cert.name}
                    </h5>
                    <p
                      className="font-['Montserrat'] mb-2"
                      style={{
                        fontSize: "13px",
                        color: currentTheme.colors.textSecondary,
                      }}
                    >
                      {cert.issuer}
                    </p>
                    <p
                      className="font-['Montserrat']"
                      style={{
                        fontSize: "12px",
                        color: currentTheme.colors.accent,
                        fontWeight: 500,
                      }}
                    >
                      {cert.year}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}