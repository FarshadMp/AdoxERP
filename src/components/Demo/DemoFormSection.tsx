"use client";

import { motion } from "framer-motion";

export default function DemoFormSection() {
  const industries = [
    "Trading",
    "Manufacturing",
    "Retail",
    "Contracting",
    "Healthcare",
    "Services",
    "Other",
  ];
  const cities = ["Riyadh", "Jeddah", "Dammam", "Other"];
  const challenges = [
    "ZATCA compliance",
    "Inventory management",
    "HR & Payroll",
    "AI & reporting",
    "Full ERP migration",
    "Other",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white p-6 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-primary/5"
    >
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-primary-dark mb-2">
          Demo Request Form
        </h3>
        <p className="text-secondary-dark/60 text-sm">
          Tell us about your business to get a personalised session.
        </p>
      </div>

      <form className="space-y-3 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-primary-dark">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-5 py-3.5 bg-slate-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Enter your full name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-primary-dark">
              Company Name
            </label>
            <input
              type="text"
              className="w-full px-5 py-3.5 bg-slate-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Adox ERP"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-primary-dark">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-5 py-3.5 bg-slate-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="email@company.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-primary-dark">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full px-5 py-3.5 bg-slate-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="+966"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-primary-dark">City</label>
            <select className="w-full px-5 py-3.5 bg-slate-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
              {cities.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-primary-dark">
              Industry
            </label>
            <select className="w-full px-5 py-3.5 bg-slate-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
              {industries.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-primary-dark">
              Employees
            </label>
            <input
              type="number"
              className="w-full px-5 py-3.5 bg-slate-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="10"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-primary-dark">
              Language
            </label>
            <div className="flex gap-4 pt-2">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="radio" name="lang" value="Arabic" defaultChecked />{" "}
                Arabic
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="radio" name="lang" value="English" /> English
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-primary-dark">
            Main Challenge
          </label>
          <select className="w-full px-5 py-3.5 bg-slate-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
            {challenges.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full mt-4 md:mt-0 py-5 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 active:scale-95"
          onClick={(e) => e.preventDefault()}
        >
          Book My Free Demo
        </button>
      </form>
    </motion.div>
  );
}
