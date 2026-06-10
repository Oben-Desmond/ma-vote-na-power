import PageHero from "../components/PageHero";
import PageSEO from "../components/PageSEO";
import CampaignImage from "../components/CampaignImage";
import JoinForm from "../components/JoinForm";
import { IMGS } from "../data/constants";
import { buildWebPageSchema, PAGE_SEO } from "../lib/seo";

export default function VolunteerPage() {
  return (
    <div className="bg-gray-50">
      <PageSEO {...PAGE_SEO.volunteer} jsonLd={buildWebPageSchema(PAGE_SEO.volunteer)} />
      <PageHero
        title="Volunteer with Us"
        subtitle="Join our volunteer network and help mobilize young voters across Cameroon."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Get Involved", to: "/get-involved/partner" },
          { label: "Volunteer with Us" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-blue-50/50 to-white order-2 lg:order-1">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-2">Get involved</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 tracking-tight">Make a difference</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Whether you assist at registration drives, school outreach, or community events, your time makes democracy stronger.
              </p>
              <div className="hidden lg:block">
                <CampaignImage
                  src={IMGS.youthAdvocacyGroup}
                  alt="MDDT youth advocacy team at a civic engagement event"
                  aspectClass="aspect-[4/3]"
                  className="shadow-md"
                />
              </div>
            </div>

            <div className="lg:hidden px-6 sm:px-8 pb-6 sm:pb-8 bg-gradient-to-br from-blue-50/50 to-white order-1 lg:order-none">
              <CampaignImage
                src={IMGS.youthAdvocacyGroup}
                alt="MDDT youth advocacy team at a civic engagement event"
                aspectClass="aspect-video"
                className="shadow-md"
              />
            </div>

            <div className="bg-gray-50/80 p-6 sm:p-8 md:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-gray-100 order-3 lg:order-2">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-2">Application</p>
              <h3 className="text-xl font-black text-gray-900 mb-2 tracking-tight">Volunteer with us</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">Tell us a little about yourself and why you want to get involved.</p>
              <JoinForm submitLabel="Submit Interest" showWhy reason="Volunteer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
