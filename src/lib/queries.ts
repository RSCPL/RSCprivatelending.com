export const homepageQuery = `*[_type == "homepage"][0]{
  heroTitle,
  heroSubtitle,
  heroButtonText,
  heroImage,
  ctaTitle,
  ctaSubtitle,
  ctaButtonText,
  loanPrograms[]{
  title,
  description
  },
  faqItems[]{
    question,
    answer
  }
}`;
