import PageHero from "../components/PageHero";
import CampaignImage from "../components/CampaignImage";
import JoinForm from "../components/JoinForm";
import SectionHeading from "../components/SectionHeading";
import { IMGS, PARTNERS } from "../data/constants";

export default function PartnerPage() {
  return (
    <div className="bg-gray-50">
      <PageHero
        title="Partner With Us"
        subtitle="Collaborate with MDDT Cameroon to expand youth voter education and advocacy across the country."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Get Involved", to: "/get-involved/partner" },
          { label: "Partner With Us" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          <div className="space-y-8 sm:space-y-10 order-2 lg:order-1">
            <div className="relative pl-3 sm:pl-4 pt-3 sm:pt-4">
              <div className="absolute top-0 left-0 w-[calc(100%-0.75rem)] sm:w-[calc(100%-1rem)] h-[calc(100%-0.75rem)] sm:h-[calc(100%-1rem)] border-t-4 border-l-4 border-red-600 rounded-tl-2xl pointer-events-none z-10" aria-hidden="true" />
              <CampaignImage
                src={IMGS.westPoster}
                alt="Civic ambassadors — West region"
                aspectClass="aspect-[3/4] max-h-72 sm:max-h-96 lg:max-h-[28rem]"
                className="shadow-lg"
              />
            </div>

            <div>
              <SectionHeading
                eyebrow="Collaborators"
                title="Meet some of our partners"
                description="Organizations working alongside us to reach young voters nationwide."
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {PARTNERS.map((p) => (
                  <div key={p} className="border border-gray-200 rounded-xl p-4 flex items-center justify-center min-h-[5rem] bg-white shadow-sm hover:shadow-md hover:border-blue-200 hover:text-blue-700 transition-all duration-300">
                    <span className="text-gray-500 font-black text-sm text-center leading-snug">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8 md:p-10 lg:sticky lg:top-8 order-1 lg:order-2">
            <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-2">Partnership inquiry</p>
            <h2 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">Join Us</h2>
            <p className="text-gray-600 text-sm mb-8 leading-relaxed">
              Tell us about your organization and how you&apos;d like to collaborate on youth civic engagement.
            </p>
            <JoinForm submitLabel="Submit Interest" showCompany reason="Partner" />
          </div>
        </div>
      </div>
    </div>
  );
}
