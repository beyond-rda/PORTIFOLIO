import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiInstagram, FiSend, FiCheck, FiMapPin } from 'react-icons/fi';

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/beyond-rda', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/jacksonmuhire', label: 'LinkedIn' },
  { icon: FiInstagram, href: 'https://instagram.com/b__muhire', label: 'Instagram' },
];

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'muhirejackson2050@gmail.com', href: 'mailto:muhirejackson2050@gmail.com' },
  { icon: FiPhone, label: 'Phone', value: '+250 790056606', href: 'tel:+250790056606' },
  { icon: FiMapPin, label: 'Location', value: 'Rwanda', href: null },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setIsSubmitted(false);
        setIsSubmitting(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-block px-3 py-1 rounded-full badge text-xs mb-2">Contact</span>
          <h2 className="text-2xl md:text-3xl font-bold mb-1">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">Have a project? Let's talk!</p>
        </motion.div>

        <div className="space-y-4">
          {/* Contact Info with Full Details */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 glass px-4 py-3 rounded-xl hover:bg-indigo-500/10 transition-colors"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${index === 0 ? 'bg-gradient-to-br from-indigo-500 to-purple-500' :
                    index === 1 ? 'bg-gradient-to-br from-emerald-500 to-teal-500' :
                      'bg-gradient-to-br from-amber-500 to-orange-500'
                  }`}>
                  <info.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500">{info.label}</p>
                  <p className="text-sm font-medium">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.a
            href="https://wa.me/250790056606"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 glass px-4 py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors"
          >
            <span className="text-xl">💬</span>
            <span className="text-sm font-medium text-emerald-500">Chat on WhatsApp</span>
          </motion.a>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-3"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-xl glass flex items-center justify-center"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass p-4 rounded-xl"
          >
            <h3 className="font-bold text-sm mb-3">Send a Message</h3>
            <div className="space-y-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                required
                placeholder="Your Name"
                className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-indigo-500 outline-none text-sm"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                required
                placeholder="Your Email"
                className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-indigo-500 outline-none text-sm"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                required
                rows="3"
                placeholder="Your Message"
                className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-indigo-500 outline-none text-sm resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-3 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                isSubmitted ? <><FiCheck className="w-4 h-4" /> Sent!</> : 'Sending...'
              ) : (
                <><FiSend className="w-4 h-4" /> Send Message</>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}