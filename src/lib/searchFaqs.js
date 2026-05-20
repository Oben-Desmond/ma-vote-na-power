function answerText(answer) {
  return Array.isArray(answer) ? answer.join(" ") : answer;
}

export function searchFaqSections(sections, query) {
  const q = query.trim().toLowerCase();
  if (!q) return sections;

  return sections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => {
        const question = item.q.toLowerCase();
        const answer = answerText(item.a).toLowerCase();
        return question.includes(q) || answer.includes(q);
      }),
    }))
    .filter((section) => section.items.length > 0);
}

export function findFirstFaqMatchId(sections, query) {
  const q = query.trim().toLowerCase();
  if (!q) return null;

  for (let si = 0; si < sections.length; si += 1) {
    for (let ii = 0; ii < sections[si].items.length; ii += 1) {
      const item = sections[si].items[ii];
      const question = item.q.toLowerCase();
      const answer = answerText(item.a).toLowerCase();
      if (question.includes(q) || answer.includes(q)) {
        return `${si}-${ii}`;
      }
    }
  }

  return null;
}
