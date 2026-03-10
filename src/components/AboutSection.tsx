"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code, Palette, Smartphone, Layers } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export function AboutSection() {
  const ref = useRef(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { currentTheme } = useTheme();

  const skills = [
    { icon: Code, name: "Frontend Development" },
    { icon: Palette, name: "UI/UX Design" },
    { icon: Smartphone, name: "Responsive Design" },
    { icon: Layers, name: "Design Systems" },
  ];

  const stats = [
    { number: "2.5+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "BCA", label: "Bachelor's Degree" },
    { number: "5+", label: "Happy Clients" },
  ];

  const timeline = [
    { year: "2018-21", milestone: "Bachelor of Computer Applications" },
    { year: "2017-18", milestone: "12th Commerce (CGPA: 5.9)" },
    { year: "BCA", milestone: "CGPA: 6.5/10" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{
        backgroundColor: currentTheme.colors.primaryLighter,
      }}
    >
      <div ref={ref} className="max-w-[1200px] mx-auto px-8 md:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="font-['Montserrat'] uppercase tracking-[3px] mb-4"
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: currentTheme.colors.accent,
            }}
          >
            About Me
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Cormorant_Garamond'] max-w-[720px] mx-auto mb-5"
            style={{
              fontSize: "clamp(36px, 6vw, 48px)",
              fontWeight: 600,
              color: currentTheme.colors.text,
              letterSpacing: "-0.3px",
              lineHeight: 1.3,
            }}
          >
            Transforming Ideas into Responsive Applications
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['Montserrat'] max-w-[640px] mx-auto"
            style={{
              fontSize: "16px",
              color: currentTheme.colors.textSecondary,
            }}
          >
            Passionate React Developer focused on creating seamless user experiences
          </motion.p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-[45%_55%] gap-12 items-start">
          {/* Left Column - Photo & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            data-obstacle
          >
            <div
              className="rounded-3xl overflow-hidden mb-12 hover:scale-[1.02] transition-transform duration-500"
              style={{
                border: `2px solid ${currentTheme.colors.accent}66`,
                boxShadow: "0 16px 56px rgba(0, 0, 0, 0.4)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5OTYzNjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional Workspace"
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Timeline */}
            <div className="relative pl-8">
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5"
                style={{ backgroundColor: currentTheme.colors.accent }}
              />
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  className="relative mb-8 last:mb-0"
                >
                  <div
                    className="absolute top-2 w-4 h-4 rounded-full"
                    style={{ 
                      backgroundColor: currentTheme.colors.accent,
                      boxShadow: `0 0 0 3px ${currentTheme.colors.primaryLight}, 0 0 8px ${currentTheme.colors.accent}66`,
                      left: "-32px",
                      transform: "translateX(-50%)",
                    }}
                  />
                  <div
                    className="font-['Cormorant_Garamond'] mb-1"
                    style={{
                      fontSize: "24px",
                      color: currentTheme.colors.accent,
                      fontWeight: 600,
                    }}
                  >
                    {item.year}
                  </div>
                  <div
                    className="font-['Montserrat']"
                    style={{
                      fontSize: "14px",
                      color: currentTheme.colors.text,
                    }}
                  >
                    {item.milestone}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 mb-10">
              <p
                className="font-['Montserrat']"
                style={{
                  fontSize: "16px",
                  color: currentTheme.colors.textSecondary,
                  lineHeight: 1.85,
                }}
              >
                React Developer with hands-on experience in identifying web-based user interactions along with designing & implementing highly-responsive user interface components by deploying React concepts. Proficient in translating designs & wireframes into high-quality code, and writing application interface code via Javascript and ReactJS workflows.
              </p>
              <p
                className="font-['Montserrat']"
                style={{
                  fontSize: "16px",
                  color: currentTheme.colors.textSecondary,
                  lineHeight: 1.85,
                }}
              >
                My expertise includes front-end optimization, API integration, and creating engaging user interfaces. I excel at identifying and resolving technical issues while maintaining code quality and performance standards.
              </p>
            </div>

            {/* Skills Highlight */}
            <div
              className="p-8 rounded-xl mb-12"
              style={{
                backgroundColor: `${currentTheme.colors.accent}14`,
                borderLeft: `4px solid ${currentTheme.colors.accent}`,
              }}
              data-obstacle
            >
              <div
                className="font-['Montserrat'] mb-6"
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: currentTheme.colors.accent,
                }}
              >
                Core Expertise
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
                    >
                      <Icon size={24} color={currentTheme.colors.accent} />
                      <span
                        className="font-['Montserrat']"
                        style={{
                          fontSize: "14px",
                          color: currentTheme.colors.text,
                        }}
                      >
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="text-center glass-water liquid-shimmer p-6 rounded-xl cursor-pointer"
                  style={{
                    backdropFilter: "blur(12px) saturate(150%)",
                    border: `1px solid ${currentTheme.colors.accent}33`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 12px 32px ${currentTheme.colors.accent}44`;
                    e.currentTarget.style.borderColor = `${currentTheme.colors.accent}66`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '';
                    e.currentTarget.style.borderColor = `${currentTheme.colors.accent}33`;
                  }}
                >
                  <div
                    className="font-['Montserrat'] mb-2"
                    style={{
                      fontSize: "48px",
                      fontWeight: 700,
                      color: currentTheme.colors.accent,
                      letterSpacing: "-1px",
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="font-['Montserrat']"
                    style={{
                      fontSize: "13px",
                      color: currentTheme.colors.textSecondary,
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}