import CallToAction from "../components/CallToAction";
import CampaignImage from "../components/CampaignImage";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { IMGS, SERVICES } from "../data/constants";

export default function ServicesPage() {
  return (
    <div className="bg-gray-50">
      <PageHero
        title="Services"
        subtitle="Tools and programs that help young Cameroonians understand their rights, register to vote, and lead advocacy campaigns."
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <SectionHeading
          eyebrow="What we offer"
          title="Programs for youth civic engagement"
          description="Together, these services create a pathway from awareness to action—helping youth become informed voters and effective advocates."
        />
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className={`${s.color} rounded-2xl p-6 sm:p-8 border border-white/60 shadow-sm hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300`}
            >
              <h3 className="font-black text-gray-900 text-lg mb-3">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <CallToAction
            title="Your Voice, Your Power"
            description="Questions about our programs? We are here to help you get started."
            secondaryTo="/contact"
            secondaryLabel="Contact Us Now"
            primaryTo="/register"
            primaryLabel="Register to Vote"
          />
          <CampaignImage src={IMGS.ballot_hand} alt="Voting in Cameroon" aspectClass="aspect-[4/3]" className="shadow-xl" />
        </div>
      </section>
    </div>
  );
}
