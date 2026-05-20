import CallToAction from "../components/CallToAction";
import CampaignImage from "../components/CampaignImage";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import TeamMemberCard from "../components/TeamMemberCard";
import { IMGS, SITE } from "../data/constants";
import { TEAM_MEMBERS } from "../data/team";

const WHAT_WE_DO = [
  { img: IMGS.teamGroup, title: "Advocacy for Civil Rights", desc: "Protecting youth voices and civil liberties through banners, conferences, and ELECAM partnerships." },
  { img: IMGS.civicPageant, title: "Youth Leadership and Engagement", desc: "Programs like Mr & Miss Civic Cameroon that build ambassadors for civil rights across regions." },
  { img: IMGS.voterCard, title: "Voter Education and Empowerment", desc: "Registration drives and guides that help youth understand and exercise their electoral rights." },
];

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      <PageHero
        title="About Us"
        subtitle={SITE.mission}
        crumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Led by MDDT Cameroon with support from partners including NED, we run registration drives,
            the One Youth One Dream conference, Mr & Miss Civic Cameroon, and school outreach under the{" "}
            <span className="font-semibold text-gray-900">{SITE.name}</span> campaign.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20 md:pb-24 space-y-12 sm:space-y-16 md:space-y-24">
        {WHAT_WE_DO.map((item, i) => (
          <div
            key={item.title}
            className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-10 lg:gap-14 items-center`}
          >
            <div className="flex-1 w-full">
              <CampaignImage src={item.img} alt={item.title} aspectClass="aspect-[4/3]" className="shadow-lg" />
            </div>
            <div className="flex-1">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-2">What we do</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 tracking-tight">{item.title}</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.desc}</p>
              <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                We amplify hashtags like {SITE.hashtags.join(", ")} and promote peaceful, informed participation in elections.
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="relative bg-gradient-to-br from-blue-700 to-blue-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} aria-hidden="true" />
        <div className="relative max-w-2xl mx-auto">
          <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.2em] mb-3">Our purpose</p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">Why Youth Advocacy Matters</h2>
          <p className="text-blue-100 text-sm md:text-base leading-relaxed">
            When young people vote and engage in civic life, communities grow stronger. We work to remove
            barriers to registration and build lasting democratic habits.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <SectionHeading
          eyebrow="The people behind the mission"
          title="Meet Our Team"
          description="MDDT Cameroon team members contributing research, technology, and outreach for Ma Vote 2025 na pawa."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-start">
          <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-10 shadow-sm">
            <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-2">Impact</p>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Outcome & Impact</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Increased voter registration among youth, stronger civil society partnerships, and greater
              awareness of electoral rights across Cameroon.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              We measure success through community workshops, digital reach, and participation in national
              and local elections.
            </p>
          </div>
          <CallToAction
            variant="yellow"
            title="Join Us"
            description="Take the first step toward shaping the future of democracy in your community."
            primaryTo="/register"
            primaryLabel="Join the Movement"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20 md:pb-24">
        <CallToAction
          title="Your Voice, Your Power"
          description="Reach out or register today to start your journey as an engaged citizen."
          secondaryTo="/contact"
          secondaryLabel="Contact Us Now"
          primaryTo="/register"
          primaryLabel="Register to Vote"
          image={IMGS.voterCard}
        />
      </section>
    </div>
  );
}
