import CallToAction from "../components/CallToAction";
import CampaignImage from "../components/CampaignImage";
import PageHero from "../components/PageHero";
import PageSEO from "../components/PageSEO";
import SectionHeading from "../components/SectionHeading";
import TeamMemberCard from "../components/TeamMemberCard";
import { buildWebPageSchema, PAGE_SEO } from "../lib/seo";
import { IMGS, SITE } from "../data/constants";
import { TEAM_MEMBERS } from "../data/team";

const WHAT_WE_DO = [
  {
    img: IMGS.electionsWorkshop,
    title: "Civic Rights & Voter Education",
    desc: "Educate youth on civic rights, voter registration, voting procedures, and electoral candidates—as well as other resources on civic duties.",
  },
  {
    img: IMGS.advocacySpeaker,
    title: "Combat Misinformation",
    desc: "Provide verified resources such as voter card guides and ELECAM office locators so young people can make informed decisions.",
  },
  {
    img: IMGS.missCivicNorth,
    title: "Peaceful Elections & Youth Mobilization",
    desc: "Promote peaceful elections through the #No to Electoral Violence campaign, simplify access to registration services, and mobilize youth through digital campaigns like #MaVoteNaPawa.",
  },
];

const PARTNERS = [
  "National Endowment for Democracy (NED) — strategic and financial partner",
  "7 youth-led Civil Society Organizations (CSOs) — grassroots reach and inclusivity",
  "ELECAM (Elections Cameroon) — official electoral data and resources",
  "Ministry of Youth and Civic Education",
  "Ministry of Territorial Administration",
  "International partner organizations",
];

const OBJECTIVES = [
  "Educate youth on civic rights, voter registration, voting procedures, and electoral candidates.",
  "Combat misinformation with verified resources (e.g., voter card guides, ELECAM office locator).",
  "Promote peaceful elections (#No to Electoral Violence) by raising awareness against violence and encouraging nonpartisan civic engagement.",
  "Simplify access to services: locate registration centers, track election timelines, and report issues.",
  "Mobilize youth through digital campaigns (#MaVoteNaPawa) and interactive tools like quizzes and podcasts.",
];

const TEAM_BEHIND = [
  "MDDT Cameroon's Research Team — governance and civil rights experts ensuring accurate, up-to-date content.",
  "Young Volunteers — students, influencers, and activists creating videos, articles, and social media campaigns.",
  "Tech Developers & Designers — building an accessible, user-friendly platform for all regions, including remote areas.",
  "Technical Partners — civil society organizations (CSOs) and media outlets amplifying offline outreach.",
];

const featuredMember = TEAM_MEMBERS.find((m) => m.featured);
const teamGrid = TEAM_MEMBERS.filter((m) => !m.featured);

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      <PageSEO {...PAGE_SEO.about} jsonLd={buildWebPageSchema(PAGE_SEO.about)} />
      <PageHero
        title="About Us"
        subtitle="Empowering Cameroonian youth with knowledge and resources to actively participate in the electoral process."
        crumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-3xl space-y-6">
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            <span className="font-semibold text-gray-900">237 Civil Rights Insight</span> is a Movement for
            Democracy, Development and Transparency (MDDT) Cameroon and National Endowment for Democracy (NED)
            U.S.A initiative aimed at empowering Cameroonian youth with knowledge and resources to actively
            participate in the electoral process. We educate young people on civic rights, voter registration,
            voting procedures, and electoral candidates—combating misinformation with verified resources,
            promoting peaceful elections, simplifying access to services, and mobilizing youth through digital
            campaigns and interactive tools for informed, nonpartisan civic engagement.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            In 2018, approximately 70% of young people aged 18–30 were either unregistered or did not vote in
            national elections (per African Union data). This apathy, combined with youth manipulation into
            electoral violence and radicalization in crisis-infested regions (Northwest and Southwest),
            threatens democratic stability, inclusion, and citizen participation.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            The <span className="font-semibold text-gray-900">#NotTooYoungToVote</span> campaign, led by MDDT
            Cameroon in partnership with local CSOs and NED, was launched to reverse this trend. This website is
            a direct response to these challenges—educating, empowering, and equipping young Cameroonians to
            claim their civil rights and actively participate in electoral processes.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-10 shadow-sm">
            <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-2">Collaboration</p>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Sponsors & Partners</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              This project is implemented by MDDT Cameroon, an organization dedicated to promoting democracy and
              civil rights, in collaboration with:
            </p>
            <ul className="space-y-3">
              {PARTNERS.map((partner) => (
                <li key={partner} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                  <span className="text-blue-600 font-bold shrink-0">●</span>
                  <span>{partner}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-10 shadow-sm">
            <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-2">Our goals</p>
            <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Specific Objectives</h2>
            <ol className="space-y-4">
              {OBJECTIVES.map((objective, i) => (
                <li key={objective} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                  <span className="text-blue-700 font-black shrink-0">{i + 1}.</span>
                  <span>{objective}</span>
                </li>
              ))}
            </ol>
          </div>
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
                We amplify hashtags like {SITE.hashtags.join(", ")} and promote peaceful, informed participation
                in elections.
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="relative bg-gradient-to-br from-blue-700 to-blue-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-2xl mx-auto">
          <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.2em] mb-3">Our motto</p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">
            Not Too Young To Vote — {SITE.tagline}
          </h2>
          <p className="text-blue-100 text-sm md:text-base leading-relaxed">
            Join us in building a Cameroon where every young person has the tools and confidence to shape their
            nation's future.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <SectionHeading
          eyebrow="The people behind the mission"
          title="Team Behind the Website"
          description="This platform is powered by a dynamic, youth-driven team working across research, volunteering, technology, and outreach."
        />
        <ul className="grid sm:grid-cols-2 gap-4 max-w-4xl mb-12">
          {TEAM_BEHIND.map((item) => (
            <li
              key={item}
              className="bg-white rounded-2xl border border-gray-100 px-5 py-4 text-gray-600 text-sm leading-relaxed shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>

        {featuredMember && (
          <div className="mb-12">
            <TeamMemberCard member={featuredMember} featured />
          </div>
        )}

        <h3 className="text-xl font-black text-gray-900 mb-8 tracking-tight">Meet Our Team</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamGrid.map((member) => (
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
              awareness of electoral rights across Cameroon—including verified resources that counter
              misinformation and reduce electoral violence.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              We measure success through community workshops, digital reach, interactive civic tools, and
              participation in national and local elections.
            </p>
          </div>
          <CallToAction
            variant="yellow"
            title="Join the Movement"
            description="Stay informed and get involved in the fight for civil rights and democracy in Cameroon. Together, we can make sure youth voices are heard."
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
          image={IMGS.civicAmbassadors}
        />
      </section>
    </div>
  );
}
