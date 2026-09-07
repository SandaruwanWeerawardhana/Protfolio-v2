import { useCallback, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Send } from 'lucide-react';
import { trackEvent } from '../../lib/analytics';
import { Button } from '../ui/Button';
import Spinner from '../ui/Spinner';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const emptyForm: FormState = { name: '', email: '', message: '' };

/**
 * Contact form with optimistic UI states.
 * Submission is simulated - swap the awaited promise for a real endpoint
 * without touching the surrounding markup.
 */
export function ContactForm() {
  const [formData, setFormData] = useState<FormState>(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setFormData((previous) => ({ ...previous, [name]: value }));
    },
    [],
  );

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      setIsSubmitting(true);
      setSubmitError('');
      setSubmitSuccess(false);

      const startTime = performance.now();

      try {
        // Replace with actual form submission logic.
        await new Promise((resolve) => setTimeout(resolve, 1500));

        trackEvent('contact_form_submit', {
          success: true,
          formLength: formData.message.length,
          // Field contents are never sent - only whether they were filled in.
          hasName: Boolean(formData.name),
          hasEmail: Boolean(formData.email),
          timestamp: new Date().toISOString(),
          duration: performance.now() - startTime,
        });

        setSubmitSuccess(true);
        setFormData(emptyForm);
      } catch (error) {
        trackEvent('contact_form_error', {
          success: false,
          errorType: error instanceof Error ? error.name : 'Unknown',
          timestamp: new Date().toISOString(),
          duration: performance.now() - startTime,
        });

        setSubmitError('Something went wrong. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData],
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your name"
            className="field"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="field-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="field"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="field-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="How can I help you?"
          className="field resize-none"
          required
        />
        <p className="mt-2 text-xs text-content-subtle">
          I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {submitError ? (
          <motion.p
            key="error"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            role="alert"
            className="flex items-center gap-2 rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-300"
          >
            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            {submitError}
          </motion.p>
        ) : null}

        {submitSuccess ? (
          <motion.p
            key="success"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            role="status"
            className="flex items-center gap-2 rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
            Your message has been sent successfully! I&apos;ll get back to you soon.
          </motion.p>
        ) : null}
      </AnimatePresence>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <>
            <Spinner label="Sending message" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}

export default ContactForm;
