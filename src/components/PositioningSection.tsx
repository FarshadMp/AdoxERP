"use client";

export default function PositioningSection() {
  return (
    <section
      className="relative py-14 md:py-22 bg-white overflow-hidden"
      id="about"
    >
      {/* Subtle Background Glow/mesh like Heffl */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0693FB]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#00BCFC]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="flex flex-col items-center">
          {/* Section Badge with sparkle like the image */}
          <div className="mb-6 px-4 py-1.5 rounded-full bg-[#0693FB]/10 text-[#0693FB] text-[12.5px] font-semibold flex items-center gap-2 border border-[#0693FB]/20">
            <span className="text-[#0693FB]">✦</span>A New Category
          </div>

          {/* Main Title - Proportioned like the image */}
          <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-primary-dark leading-tight tracking-tight mb-6">
            A New Category of{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0693FB] to-[#0470c2]">
              ERP
            </span>
          </h2>

          {/* Core Narrative - Proportioned like the image description */}
          <div className="space-y-6 max-w-2xl px-4">
            <p className="text-primary-light text-[15px] md:text-[18px] leading-relaxed font-normal">
              IntelliERP is not just another ERP system. It is an
              <span className="text-primary-dark font-semibold">
                {" "}
                Operational Intelligence Platform.
              </span>
            </p>

            <div className="w-12 h-[2px] bg-[#0693FB]/30 mx-auto my-4" />

            <p className="text-primary-light text-base leading-relaxed">
              Traditional ERP systems record transactions.
              <span className="block mt-4 text-primary-light text-base">
                IntelliERP actively helps businesses run, optimise, and grow
                through real-time insights and integrated operations.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
