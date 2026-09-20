type FaqItem = {
  question: string;
  answer: string;
};

const defaultFaqs: FaqItem[] = [
  {
    question: "Is Hereditary scary?",
    answer:
      "Yes. Hereditary is considered one of the scariest psychological horror films due to its unsettling atmosphere, disturbing imagery, and emotional intensity.",
  },
  {
    question: "Is Hereditary worth watching?",
    answer:
      "Absolutely. If you enjoy slow-burn psychological horror with exceptional performances and storytelling, it&apos;s highly recommended.",
  },
  {
    question: "Is Hereditary based on a true story?",
    answer:
      "No. The film is entirely fictional, although it explores realistic themes of grief, trauma, and family relationships.",
  },
  {
    question: "Does Hereditary have jump scares?",
    answer:
      "Yes, but very few. It relies more on tension, atmosphere, and psychological horror than frequent jump scares.",
  },
  {
    question: "Is Hereditary disturbing?",
    answer:
      "Yes. It contains disturbing imagery, emotional trauma, violence, and unsettling supernatural elements.",
  },
  {
    question: "Where can I watch Hereditary?",
    answer:
      "Availability depends on your country. Check streaming services like Netflix, Prime Video, Max, or Apple TV.",
  },
  {
    question: "Is there a post-credit scene?",
    answer: "No. There is no post-credit scene in Hereditary.",
  },
];

export default function MovieFaqSection({ faqs = defaultFaqs }: { faqs?: FaqItem[] }) {
  return (
    <div className="single-box-section">
      <h2 className="section-heading">FAQS (Frequently Asked Questions)</h2>
      {faqs.map((faq, index) => (
        <details className="faq-item" key={index} open={index === 0}>
          <summary className="faq-question cursor-pointer list-none flex justify-between items-center">
            <span>{faq.question}</span>
            <i className="fi fi-br-angle-small-down" />
          </summary>
          <div className="faq-answer active">
            <p>{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

