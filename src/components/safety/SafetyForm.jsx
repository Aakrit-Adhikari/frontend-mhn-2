"use client";

import { useState } from "react";

export default function SafetyForm() {
  const [reportType, setReportType] = useState("occurrence");

  const steps = [
    {
      title: "You submit confidentially",
      text: "Your identity is protected. Name fields are optional.",
    },
    {
      title: "Safety team reviews within 48h",
      text: "Our SMS officer triages your report and classifies severity.",
    },
    {
      title: "Action is taken",
      text: "Findings inform operational changes, training, or fleet procedures.",
    },
    {
      title: "No retaliation. Ever.",
      text: "Reports made in good faith are protected by our Just Culture policy.",
      yellow: true,
    },
  ];

  return (
    <section className="w-full bg-[#F4F8FC] px-4 py-14 text-[#003B70] sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-[1380px] grid-cols-1 gap-10 lg:grid-cols-[1fr_420px] lg:gap-12">
        {/* LEFT SIDE */}
        <div>
          <div className="mb-9 sm:mb-11">
            <h2 className="text-[28px] font-extrabold uppercase leading-tight tracking-[-1px] text-[#003B70] sm:text-[34px]">
              Safety Reporting Form
            </h2>
            <div className="mt-2 h-[3px] w-[60px] bg-[#F5B62A]" />

            <p className="mt-4 max-w-[950px] text-[16px] leading-[1.55] text-[#5E7185] sm:text-[18px] sm:leading-[1.45]">
              Anyone may submit a safety report — passengers, crew, ground
              staff, or the public. All reports are reviewed by our flight
              operations team. No retaliation, ever.
            </p>
          </div>

          {/* FORM CARD */}
          <form className="rounded-[20px] border-t-[5px] border-[#F5B62A] bg-white px-4 py-9 shadow-[0_20px_60px_rgba(0,43,82,0.08)] sm:px-10 sm:py-12 lg:px-12">
            {/* Your Details */}
            <div>
              <h3 className="mb-7 text-[12px] font-extrabold uppercase tracking-[3px] text-[#6C7C8C] sm:mb-9 sm:text-[14px] sm:tracking-[5px]">
                Your Details (Optional)
              </h3>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <Label>Full Name</Label>
                  <Input placeholder="Your name (or leave blank)" />
                </div>

                <div>
                  <Label>Mobile</Label>
                  <Input placeholder="+977 ..." />
                </div>
              </div>

              <div className="mt-7">
                <Label>Email</Label>
                <Input placeholder="your@email.com" />
              </div>
            </div>

            {/* Report Details */}
            <div className="mt-14 sm:mt-20">
              <h3 className="mb-7 text-[12px] font-extrabold uppercase tracking-[3px] text-[#6C7C8C] sm:mb-9 sm:text-[14px] sm:tracking-[5px]">
                Report Details
              </h3>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 cursor-pointer">
                <div>
                  <Label required>Date</Label>
                  <Input type="date" />
                </div>

                <div>
                  <Label required>Time</Label>
                  <Input className="cursor-pointer" type="time" />
                </div>
              </div>

              <div className="mt-7">
                <Label required>Location</Label>
                <Input placeholder="Kathmandu helipad, Lukla, Pokhara..." />
              </div>

              <div className="mt-7">
                <Label required>Report Type</Label>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 cursor-pointer">
                  <button
                    type="button"
                    onClick={() => setReportType("occurrence")}
                    className={`cursor-pointer rounded-[8px] border px-5 py-5 text-center transition sm:px-6 sm:py-6 ${
                      reportType === "occurrence"
                        ? "border-[#003B70] bg-[#E6F2FB]"
                        : "border-[#DCE5EE] bg-white"
                    }`}
                  >
                    <h4 className="text-[13px] font-extrabold uppercase tracking-[2px] text-[#001B33] cursor-pointer sm:text-[14px]">
                      Occurrence
                    </h4>
                    <p className="mt-3 text-[14px] text-[#647789] cursor-pointer sm:mt-4">
                      Something happened
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setReportType("hazard")}
                    className={`cursor-pointer rounded-[8px] border px-5 py-5 text-center transition sm:px-6 sm:py-6 ${
                      reportType === "hazard"
                        ? "border-[#003B70] bg-[#E6F2FB]"
                        : "border-[#DCE5EE] bg-white"
                    }`}
                  >
                    <h4 className="text-[13px] font-extrabold uppercase tracking-[2px] text-[#001B33] sm:text-[14px]">
                      Hazard
                    </h4>
                    <p className="mt-3 text-[14px] text-[#647789] sm:mt-4">
                      A risk to address
                    </p>
                  </button>
                </div>
              </div>

              <div className="mt-7">
                <Label required>Description</Label>
                <Textarea placeholder="What happened? Be as specific as possible — who, what, where, when, how." />
              </div>

              <div className="mt-7">
                <Label required>Suggestion</Label>
                <Textarea
                  small
                  placeholder="What could prevent recurrence? Any process or training suggestions welcome."
                />
              </div>
            </div>

            <div className="my-8 h-px w-full bg-[#DCE5EE] cursor-pointer sm:my-9" />

            <label className="flex cursor-pointer items-start gap-3 text-[14px] leading-[1.6] text-[#50667A] cursor-pointer sm:gap-4 sm:text-[15px] sm:leading-[1.55]">
              <input
                type="checkbox"
                className="mt-1 h-5 w-5 shrink-0 rounded border-[#95A4B3] cursor-pointer"
              />
              <span>
                I understand my report will be reviewed by Mountain
                Helicopters&apos; Safety Management team.{" "}
                <strong className="font-extrabold text-[#001B33]">
                  No retaliation policy applies
                </strong>{" "}
                — reporting in good faith never results in punitive action.
              </span>
            </label>

            <button
              type="submit"
              className="cursor-pointer mt-9 flex h-[60px] w-full items-center justify-center gap-3 rounded-[8px] bg-[#003B70] text-[16px] font-extrabold text-white transition hover:bg-[#002f59] sm:mt-10 sm:h-[72px] sm:text-[20px]"
            >
              Submit Confidential Report
              <span className="text-[24px] leading-none sm:text-[28px]">→</span>
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <aside className="space-y-7 lg:space-y-9 lg:pt-[20px]">
          {/* What happens next */}
          <div className="rounded-[20px] border-l-[5px] border-[#003B70] bg-white px-5 py-7 shadow-[0_20px_60px_rgba(0,43,82,0.1)] sm:px-8 sm:py-8">
            <h3 className="mb-7 text-[12px] font-extrabold uppercase tracking-[3px] text-[#F5A51E] sm:text-[13px] sm:tracking-[4px]">
              What Happens Next
            </h3>

            <div className="space-y-7">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div
                    className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full text-[15px] font-extrabold sm:h-[36px] sm:w-[36px] sm:text-[16px] ${
                      step.yellow
                        ? "bg-[#F5B62A] text-[#003B70]"
                        : "bg-[#003B70] text-white"
                    }`}
                  >
                    {index + 1}
                  </div>

                  <div>
                    <h4 className="text-[16px] font-extrabold leading-tight text-[#001B33] sm:text-[18px]">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-[14px] leading-[1.55] text-[#5E7185] sm:text-[15px]">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Urgent Safety Matter */}
          <div className="relative overflow-hidden rounded-[18px] bg-[#003B70] px-5 py-7 text-white sm:px-8 sm:py-8">
            <div className="absolute -right-10 -top-16 h-[150px] w-[150px] rounded-full bg-white/10" />

            <h3 className="text-[12px] font-extrabold uppercase tracking-[3px] text-[#F5B62A] sm:text-[13px]">
              Urgent Safety Matter?
            </h3>

            <p className="mt-6 max-w-[330px] text-[16px] font-semibold leading-[1.65] sm:mt-7 sm:text-[18px]">
              For active incidents or immediate safety threats, call us
              directly. Lines are answered 24/7.
            </p>

            <a
              href="tel:+9779712082949"
              className="mt-6 flex items-center justify-between gap-4 rounded-[8px] bg-white px-4 py-5 text-[#003B70] sm:px-5"
            >
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#6C7C8C] sm:text-[12px] sm:tracking-[4px]">
                  Call Directly
                </p>
                <p className="mt-2 break-words text-[20px] font-extrabold sm:text-[24px]">
                  +977-9712082949
                </p>
              </div>
              <span className="shrink-0 text-[30px] sm:text-[34px]">→</span>
            </a>

            <a
              href="https://wa.me/9779712082949"
              target="_blank"
              className="mt-4 flex items-center justify-between gap-4 rounded-[8px] border border-white/30 px-4 py-5 sm:px-5"
            >
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-[2px] text-white/80 sm:text-[12px] sm:tracking-[3px]">
                  Whatsapp 24/7
                </p>
                <p className="mt-2 break-words text-[20px] font-extrabold sm:text-[24px]">
                  +977-9712082949
                </p>
              </div>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F5B62A]" />
            </a>
          </div>

          {/* Why we collect this */}
          <div className="rounded-[18px] border border-[#BFD2E3] bg-[#E6F2FB] px-5 py-7 sm:px-8 sm:py-8">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#003B70] text-[#003B70]">
                i
              </span>
              <h3 className="text-[12px] font-extrabold uppercase tracking-[3px] text-[#003B70] sm:text-[13px] sm:tracking-[4px]">
                Why We Collect This
              </h3>
            </div>

            <p className="mt-6 text-[14px] leading-[1.65] text-[#304B62] sm:text-[15px]">
              Every report becomes data in our Safety Management System.
              Patterns we couldn&apos;t see in any one flight emerge across
              many. That&apos;s how aviation gets safer — one report at a time.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Label({ children, required }) {
  return (
    <label className="mb-3 block text-[12px] font-extrabold uppercase tracking-[2px] text-[#003B70] sm:text-[14px] sm:tracking-[3px]">
      {children} {required && <span className="text-[#F5A51E]">*</span>}
    </label>
  );
}

function Input({ type = "text", placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="h-[56px] w-full rounded-[8px] border border-[#DCE5EE] bg-white px-4 text-[16px] text-[#001B33] outline-none transition placeholder:text-[#91A0B8] focus:border-[#003B70] sm:h-[64px] sm:px-5 sm:text-[20px]"
    />
  );
}

function Textarea({ placeholder, small }) {
  return (
    <textarea
      placeholder={placeholder}
      rows={small ? 4 : 7}
      className="w-full resize-y rounded-[8px] border border-[#DCE5EE] bg-white px-4 py-4 text-[16px] text-[#001B33] outline-none transition placeholder:text-[#91A0B8] focus:border-[#003B70] sm:px-5 sm:py-5 sm:text-[20px]"
    />
  );
}