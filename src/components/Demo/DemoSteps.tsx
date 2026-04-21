"use client";

import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Fill in the form",
    text: "Tell us about your business — your industry, your city, and the main challenges you want to solve.",
  },
  {
    id: "02",
    title: "Get a confirmation",
    text: "Regularly confirm a time that works for you — typically within one business day.",
  },
  {
    id: "03",
    title: "Join the session",
    text: "Join via video call or in person at our Riyadh, Jeddah, or Dammam office.",
  },
  {
    id: "04",
    title: "Follow-up",
    text: "Receive a personalised summary and a proposal tailored to your business.",
  },
];

export default function DemoSteps() {
  return (
    <div className="space-y-12">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
          How to Book Your Free Demo
        </h2>
        <p className="text-secondary-dark/70">
          Four simple steps to a transformed business operation.
        </p>
      </div>

      <div className="space-y-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-6 items-start"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold">
              {step.id}
            </div>
            <div>
              <h4 className="text-xl font-bold text-primary-dark mb-1">
                {step.title}
              </h4>
              <p className="text-secondary-dark/60 text-base leading-relaxed">
                {step.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
