import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdOutlineSend } from "react-icons/md";
import SpotlightCard from "./SpotlightCard";
import { trackEvent } from "../utils/analyticsUtils";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Optimize handleSubmit with useCallback to prevent unnecessary re-renders
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitError("");

      // Measure form submission time
      const startTime = performance.now();

      // Simulate form submission
      try {
        // Replace with actual form submission logic
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Track successful form submission with more detailed info
        trackEvent("contact_form_submit", {
          success: true,
          formLength: formData.message.length,
          // Don't include actual form data for privacy reasons
          hasName: Boolean(formData.name),
          hasEmail: Boolean(formData.email),
          timestamp: new Date().toISOString(),
          // Include duration in the analytics event instead of using trackMetric
          duration: performance.now() - startTime,
        });

        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        // Track form submission error with error information
        trackEvent("contact_form_error", {
          success: false,
          errorType: error instanceof Error ? error.name : "Unknown",
          timestamp: new Date().toISOString(),
          // Include duration in the analytics event
          duration: performance.now() - startTime,
        });

        setSubmitError("Something went wrong. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'm just a
            message away.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-1"
            >
              <SpotlightCard
                className="h-full glass-card p-6"
                spotlightColor="rgba(70, 119, 255, 0.15)"
              >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <span className="bg-primary-900/30 rounded-lg p-2 mr-3 inline-flex">
                    <MdEmail
                      className="h-5 w-5 text-primary-400"
                      aria-hidden="true"
                    />
                  </span>
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors duration-200 border border-white/5">
                    <h4 className="font-medium text-gray-200 mb-2">
                      Email
                    </h4>
                    <a
                      href="mailto:weerawardanasw@gmail.com"
                      className="text-primary-400 hover:underline inline-block truncate max-w-full"
                      style={{ wordBreak: "break-word" }}
                    >
                      weerawardanasw@gmail.com
                    </a>
                  </div>

                  <div className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors duration-200 border border-white/5">
                    <h4 className="font-medium text-gray-200 mb-3">
                      Connect
                    </h4>
                    <div className="flex space-x-3">
                      <motion.a
                        href="https://github.com/SandaruwanWeerawardhana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white p-3 rounded-lg transition-colors duration-200 flex items-center gap-2"
                        aria-label="GitHub Profile"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <FaGithub className="h-5 w-5" />
                        <span className="text-sm font-medium">GitHub</span>
                      </motion.a>
                      <motion.a
                        href="https://www.linkedin.com/in/sandaruwan-linkdin/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white p-3 rounded-lg transition-colors duration-200 flex items-center gap-2"
                        aria-label="LinkedIn Profile"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <FaLinkedinIn className="h-5 w-5" />
                        <span className="text-sm font-medium">LinkedIn</span>
                      </motion.a>
                    </div>
                  </div>

                  <div className="bg-primary-900/10 p-4 rounded-lg border border-primary-500/20">
                    <p className="text-gray-300 text-sm italic">
                      "I'm currently available for work and open to discussing
                      new opportunities. Feel free to reach out!"
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <SpotlightCard
                className="glass-card p-8"
                spotlightColor="rgba(99, 102, 241, 0.15)"
              >
                <h3 className="text-xl font-bold text-white mb-6">
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-300"
                        >
                          Name
                        </label>
                        <div
                          className={`relative ${focusedField === "name" ? "ring-2 ring-primary-500/50 rounded-lg" : ""
                            }`}
                        >
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-600 focus:border-primary-500 bg-white/5 text-white placeholder-gray-500 transition-all duration-200 outline-none"
                            placeholder="Enter Your name"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-300"
                        >
                          Email
                        </label>
                        <div
                          className={`relative ${focusedField === "email"
                              ? "ring-2 ring-primary-500/50 rounded-lg"
                              : ""
                            }`}
                        >
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-600 focus:border-primary-500 bg-white/5 text-white placeholder-gray-500 transition-all duration-200 outline-none"
                            placeholder="Enter Your Email"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-300"
                      >
                        Message
                      </label>
                      <div
                        className={`relative ${focusedField === "message"
                            ? "ring-2 ring-primary-500/50 rounded-lg"
                            : ""
                          }`}
                      >
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border border-gray-600 focus:border-primary-500 bg-white/5 text-white placeholder-gray-500 resize-none transition-all duration-200 outline-none"
                          placeholder="How can I help you?"
                          required
                        />
                      </div>
                      <p className="mt-1 text-xs text-gray-400">
                        I'll get back to you as soon as possible.
                      </p>
                    </div>

                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm bg-red-900/20 p-3 rounded-lg border border-red-800/50"
                      >
                        {submitError}
                      </motion.div>
                    )}

                    {submitSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-green-400 text-sm bg-green-900/20 p-3 rounded-lg border border-green-800/50"
                      >
                        <div className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span>
                            Your message has been sent successfully! I'll get
                            back to you soon.
                          </span>
                        </div>
                      </motion.div>
                    )}

                    <div>
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full px-6 py-3 rounded-lg btn-primary text-white font-medium transition-all duration-200 flex items-center justify-center ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                          }`}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <MdOutlineSend className="mr-2 h-5 w-5" />
                            Send Message
                          </span>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </form>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
