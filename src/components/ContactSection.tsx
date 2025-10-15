"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export function ContactSection() {
  const ref = useRef(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { currentTheme } = useTheme();

  const socialLinks = [
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Github, href: "https://github.com/nikhilsoni27", name: "GitHub" },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${currentTheme.colors.background}, ${currentTheme.colors.primary})`,
      }}
    >
      {/* Particle Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              backgroundColor: currentTheme.colors.accent,
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: currentTheme.type === 'dark' 
            ? "radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(0, 0, 0, 0.02) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="max-w-[1200px] mx-auto px-8 md:px-20 relative z-10">
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
            Get In Touch
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
            Let's Create Something Amazing Together
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
            Have a project in mind? Let's discuss how I can help bring your vision to life
          </motion.p>
        </div>

        {/* Contact Info - Centered */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Email Card */}
            <div
              className="p-7 rounded-2xl hover:-translate-y-1 transition-transform duration-300 glass-water liquid-shimmer"
              style={{
                backdropFilter: "blur(12px) saturate(150%)",
                border: `1px solid ${currentTheme.colors.accent}33`,
                boxShadow: `inset 0 1px 0 rgba(255, 255, 255, 0.06)`,
              }}
              data-obstacle
            >
              <Mail size={32} color={currentTheme.colors.accent} className="mb-3" />
              <p
                className="font-['Montserrat'] mb-2"
                style={{
                  fontSize: "13px",
                  color: currentTheme.colors.textSecondary,
                }}
              >
                Email me at
              </p>
              <a
                href="mailto:nikhilsoni1030@gmail.com"
                className="font-['Montserrat'] transition-colors"
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: currentTheme.colors.text,
                }}
              >
                nikhilsoni1030@gmail.com
              </a>
            </div>

            {/* Phone Card */}
            <div
              className="p-7 rounded-2xl hover:-translate-y-1 transition-transform duration-300 glass-water liquid-shimmer"
              style={{
                backdropFilter: "blur(12px) saturate(150%)",
                border: `1px solid ${currentTheme.colors.accent}33`,
                boxShadow: `inset 0 1px 0 rgba(255, 255, 255, 0.06)`,
              }}
              data-obstacle
            >
              <Phone size={32} color={currentTheme.colors.accent} className="mb-3" />
              <p
                className="font-['Montserrat'] mb-2"
                style={{
                  fontSize: "13px",
                  color: currentTheme.colors.textSecondary,
                }}
              >
                Call me at
              </p>
              <a
                href="tel:+919462514026"
                className="font-['Montserrat'] transition-colors"
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: currentTheme.colors.text,
                }}
              >
                +91 9462514026
              </a>
            </div>

            {/* Location Card */}
            <div
              className="p-7 rounded-2xl hover:-translate-y-1 transition-transform duration-300 glass-water liquid-shimmer"
              style={{
                backdropFilter: "blur(12px) saturate(150%)",
                border: `1px solid ${currentTheme.colors.accent}33`,
                boxShadow: `inset 0 1px 0 rgba(255, 255, 255, 0.06)`,
              }}
              data-obstacle
            >
              <MapPin size={32} color={currentTheme.colors.accent} className="mb-3" />
              <p
                className="font-['Montserrat'] mb-2"
                style={{
                  fontSize: "13px",
                  color: currentTheme.colors.textSecondary,
                }}
              >
                Based in
              </p>
              <p
                className="font-['Montserrat']"
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: currentTheme.colors.text,
                }}
              >
                Udaipur, Rajasthan (IST)
              </p>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p
                className="font-['Montserrat'] mb-4"
                style={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: currentTheme.colors.text,
                }}
              >
                Connect with me
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 group"
                      style={{
                        backgroundColor: `${currentTheme.colors.accent}1F`,
                        border: `1px solid ${currentTheme.colors.accent}4D`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = currentTheme.colors.accent;
                        const icon = e.currentTarget.querySelector('svg');
                        if (icon) {
                          icon.style.stroke = currentTheme.type === 'dark' ? currentTheme.colors.primary : currentTheme.colors.background;
                          icon.style.color = currentTheme.type === 'dark' ? currentTheme.colors.primary : currentTheme.colors.background;
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = `${currentTheme.colors.accent}1F`;
                        const icon = e.currentTarget.querySelector('svg');
                        if (icon) {
                          icon.style.stroke = currentTheme.colors.accent;
                          icon.style.color = currentTheme.colors.accent;
                        }
                      }}
                    >
                      <Icon size={20} color={currentTheme.colors.accent} style={{ transition: 'all 0.3s' }} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability Badge */}
            <div
              className="p-5 rounded-xl"
              style={{
                backgroundColor: `${currentTheme.colors.accent}33`,
                borderLeft: `3px solid ${currentTheme.colors.accent}`,
              }}
              data-obstacle
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse-glow" />
                <p
                  className="font-['Montserrat']"
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: currentTheme.colors.text,
                  }}
                >
                  Currently available for freelance projects
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}