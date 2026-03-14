import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'heroButtonText',
      title: 'Hero Button Text',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
    }),
    defineField({
      name: 'ctaSubtitle',
      title: 'CTA Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
    }),
    defineField({
      name: 'whyRscTitle',
      title: 'Why RSC Title',
      type: 'string',
    }),
    defineField({
      name: 'whyRscSubtitle',
      title: 'Why RSC Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'whyRscItems',
      title: 'Why RSC Items',
      type: 'array',
      of: [
        defineField({
          name: 'whyRscItem',
          title: 'Why RSC Item',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'loanPrograms',
      title: 'Loan Programs',
      type: 'array',
      of: [
        defineField({
          name: 'loanProgram',
          title: 'Loan Program',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'recentDealsTitle',
      title: 'Recent Deals Title',
      type: 'string',
    }),
    defineField({
      name: 'recentDealsSubtitle',
      title: 'Recent Deals Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'recentDealsItems',
      title: 'Recent Deals Items',
      type: 'array',
      of: [
        defineField({
          name: 'recentDealItem',
          title: 'Recent Deal Item',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
            }),
            defineField({
              name: 'type',
              title: 'Deal Type',
              type: 'string',
            }),
            defineField({
              name: 'location',
              title: 'Location',
              type: 'string',
            }),
            defineField({
              name: 'amount',
              title: 'Amount',
              type: 'string',
            }),
            defineField({
              name: 'note',
              title: 'Note',
              type: 'string',
            }),
            defineField({
              name: 'ltc',
              title: 'LTC / Label',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'faqItems',
      title: 'FAQ Items',
      type: 'array',
      of: [
        defineField({
          name: 'faqItem',
          title: 'FAQ Item',
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
            }),
          ],
        }),
      ],
    }),
  ],
})
