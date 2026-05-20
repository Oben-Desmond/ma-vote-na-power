import { SOCIAL_ICONS } from "./Icons";

const SOCIAL_ORDER = ["linkedin", "github", "twitter", "facebook", "instagram", "email"];

function memberSocialPlatforms(social) {
  return SOCIAL_ORDER.filter((key) => social?.[key]);
}

export default function TeamMemberCard({ member, featured = false }) {
  const platforms = memberSocialPlatforms(member.social);

  if (featured) {
    return (
      <article className="bg-white rounded-2xl shadow-lg overflow-hidden md:flex">
        <div className="md:w-80 shrink-0 bg-gray-100">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-72 md:h-full object-cover object-top"
          />
        </div>
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">{member.region}</span>
          <h3 className="text-2xl font-black text-gray-900 mb-1">{member.name}</h3>
          <p className="text-blue-700 font-semibold text-sm mb-4">{member.role}</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>
          {platforms.length > 0 && (
            <div className="flex gap-3">
              {platforms.map((key) => {
                const { Icon, label } = SOCIAL_ICONS[key];
                return (
                  <a
                    key={key}
                    href={member.social[key]}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </article>
    );
  }

  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="aspect-[4/5] overflow-hidden bg-gray-100">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <span className="text-blue-600 text-xs font-semibold uppercase">{member.region}</span>
        <h3 className="font-black text-gray-900 mt-1 mb-0.5">{member.name}</h3>
        <p className="text-blue-700 text-sm font-medium mb-3">{member.role}</p>
        <p className="text-gray-600 text-xs leading-relaxed line-clamp-4">{member.bio}</p>
        {platforms.length > 0 && (
          <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
            {platforms.map((key) => {
              const { Icon, label } = SOCIAL_ICONS[key];
              return (
                <a
                  key={key}
                  href={member.social[key]}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
}
