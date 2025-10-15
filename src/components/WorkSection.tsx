"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

export function WorkSection() {
  const ref = useRef(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeFilter, setActiveFilter] = useState("All");
  const { currentTheme } = useTheme();

  const filters = ["All", "Web Apps", "Frontend", "Full Stack"];

  const projects = [
    {
      category: "Web Apps",
      title: "CT Bankbot",
      description: "Intelligent multilingual chatbot providing 24/7 customer service for banking with seamless payment processing, account management, and live agent escalation",
      image: "https://images.unsplash.com/photo-1682941664177-7920d0e59418?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwY2hhdGJvdCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjA1MzMwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["React", "Node.js"],
      featured: true,
    },
    {
      category: "Frontend",
      title: "Archudo",
      description: "Centralized architectural project management platform streamlining task management, time tracking, purchase orders, and site visit documentation",
      image: "https://images.unsplash.com/photo-1678512680110-19a1e548585c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBwcm9qZWN0JTIwbWFuYWdlbWVudHxlbnwxfHx8fDE3NjA1MzMwMDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["JavaScript", "HTML5", "CSS3"],
    },
    {
      category: "Full Stack",
      title: "Trak Calendar",
      description: "Dynamic calendar-based scheduling application with drag-and-drop scheduling, real-time updates, and filtering by date, status, and project",
      image: "https://images.unsplash.com/photo-1642360912445-61d71dd98400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxlbmRhciUyMHNjaGVkdWxpbmclMjBhcHB8ZW58MXx8fHwxNzYwNDU5MTA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["React", "Laravel", "Tailwind CSS"],
    },
    {
      category: "Frontend",
      title: "The Event Code",
      description: "Luxury event planning website for professional event management company showcasing premium services through elegant and responsive design",
      image: "https://images.unsplash.com/photo-1642685657866-45a4c48f43ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMGRlY29yYXRpb258ZW58MXx8fHwxNzYwNTMzMDEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["React", "Tailwind CSS"],
    },
    {
      category: "Full Stack",
      title: "BPM",
      description: "Comprehensive government Business Process Management system with multi-role architecture for digitizing license and examination form submissions",
      image: "https://images.unsplash.com/photo-1620887110499-d54ecf17cefb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwZGlnaXRhbCUyMGZvcm1zfGVufDF8fHx8MTc2MDUzMzAwOXww&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["React", "Laravel", "MySQL"],
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      ref={ref}
      id="work"
      className="relative py-28 md:py-36"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
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
            Selected Work
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
            Projects That Showcase My Craft
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
            A selection of recent projects demonstrating my design and development capabilities
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-6 py-3 rounded-lg font-['Montserrat'] transition-all duration-300 cursor-pointer"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                backgroundColor:
                  activeFilter === filter ? `${currentTheme.colors.accent}26` : "transparent",
                border:
                  activeFilter === filter
                    ? `1px solid ${currentTheme.colors.accent}66`
                    : "1px solid transparent",
                color: activeFilter === filter ? currentTheme.colors.accent : currentTheme.colors.textSecondary,
              }}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - with Bouncing Ball */}
        <div ref={gridRef} className="relative" style={{ minHeight: "800px" }}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
                className={`group cursor-pointer ${project.featured ? "lg:col-span-2" : ""}`}
                data-project-card
              >
                <div
                  className="rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-3 relative glass-water liquid-shimmer cursor-pointer"
                  style={{
                    backdropFilter: "blur(14px) saturate(150%)",
                    border: `1px solid ${currentTheme.colors.accent}33`,
                    boxShadow: `0 8px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.08)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 16px 64px ${currentTheme.colors.accent}44, inset 0 1px 0 rgba(255, 255, 255, 0.12)`;
                    e.currentTarget.style.borderColor = `${currentTheme.colors.accent}66`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 8px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.08)`;
                    e.currentTarget.style.borderColor = `${currentTheme.colors.accent}33`;
                  }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
                    />
                    {project.title === "The Event Code" && (
                      <a
                        href="https://theeventcodes.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center"
                        style={{ backgroundColor: `${currentTheme.colors.accent}26` }}
                      >
                        <span
                          className="font-['Montserrat'] px-6 py-3 rounded-lg"
                          style={{
                            backgroundColor: currentTheme.colors.accent,
                            color: currentTheme.type === 'dark' ? '#0A1128' : '#FFFFFF',
                            fontSize: "14px",
                            fontWeight: 700,
                          }}
                        >
                          View Project
                        </span>
                      </a>
                    )}
                    {project.featured && (
                      <div
                        className="absolute top-4 right-4 px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: currentTheme.colors.accent,
                          color: currentTheme.type === 'dark' ? currentTheme.colors.primary : currentTheme.colors.background,
                          fontSize: "11px",
                          fontWeight: 600,
                        }}
                      >
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <div
                      className="inline-block px-3 py-1 rounded-full mb-4"
                      style={{
                        backgroundColor: `${currentTheme.colors.accent}1F`,
                        fontSize: "11px",
                        fontWeight: 600,
                        color: currentTheme.colors.accent,
                        textTransform: "uppercase",
                        letterSpacing: "1.5px",
                      }}
                    >
                      {project.category}
                    </div>

                    <h3
                      className="font-['Cormorant_Garamond'] mb-3 transition-colors duration-300"
                      style={{
                        fontSize: "28px",
                        fontWeight: 600,
                        color: currentTheme.colors.text,
                        lineHeight: 1.3,
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="font-['Montserrat'] mb-5"
                      style={{
                        fontSize: "14px",
                        color: currentTheme.colors.textSecondary,
                        lineHeight: 1.7,
                      }}
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-md font-['Montserrat']"
                          style={{
                            border: `1px solid ${currentTheme.colors.textSecondary}4D`,
                            fontSize: "12px",
                            color: currentTheme.colors.textSecondary,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}