import PageHero from "../components/PageHero";
import PageSEO from "../components/PageSEO";
import CampaignImage from "../components/CampaignImage";
import JoinForm from "../components/JoinForm";
import { IMGS } from "../data/constants";
import { buildWebPageSchema, PAGE_SEO } from "../lib/seo";

export default function RegisterPage() {
  return (
    <div className="bg-gray-50">
      <PageSEO {...PAGE_SEO.register} jsonLd={buildWebPageSchema(PAGE_SEO.register)} />
      <PageHero
        title="Register to Vote"
        subtitle="Express your interest in registering to vote. We will guide you through the ELECAM process."
        crumbs={[{ label: "Home", to: "/" }, { label: "Register to Vote" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8 md:p-10 lg:sticky lg:top-8 order-1 lg:order-none">
            <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-2">Get started</p>
            <h2 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">Join Us</h2>
            <p className="text-gray-600 text-sm mb-8 leading-relaxed">
              Complete the form below and our team will follow up with registration guidance.
            </p>
            <JoinForm submitLabel="Submit Interest" reason="Volunteer" />
          </div>

          <div className="space-y-6">
            <CampaignImage
              src={IMGS.electionBillboard}
              alt="Youth advocates promoting voter registration at a 2025 election billboard"
              aspectClass="aspect-video"
              className="shadow-lg"
            />
            <div className="relative pl-4 pb-4">
              <div className="absolute bottom-0 left-0 w-[calc(100%-1rem)] h-[calc(100%-1rem)] border-b-4 border-l-4 border-yellow-400 rounded-bl-2xl pointer-events-none" aria-hidden="true" />
              <CampaignImage
                src={IMGS.cdhcOutreach}
                alt="MDDT outreach team at the Cameroon Human Rights Commission promoting voter registration"
                aspectClass="aspect-[4/3]"
                className="shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
