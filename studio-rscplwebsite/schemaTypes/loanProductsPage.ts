import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'loanProductsPage',
  title: 'Loan Products Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'pageSubtitle',
      title: 'Page Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'pageEyebrow',
      title: 'Page Eyebrow Text',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    }),
    defineField({
      name: 'productsSectionTitle',
      title: 'Products Section Title',
      type: 'string',
    }),
    defineField({
      name: 'productsSectionSubtitle',
      title: 'Products Section Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        defineField({
          name: 'product',
          title: 'Product',
          type: 'object',
          fields: [
            defineField({
              name: 'id',
              title: 'ID',
              type: 'string',
            }),
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
            defineField({
              name: 'details',
              title: 'Details',
              type: 'text',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'calculatorTitle',
      title: 'Calculator Title',
      type: 'string',
    }),
    defineField({
      name: 'calculatorSubtitle',
      title: 'Calculator Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'contactSectionTitle',
      title: 'Contact Section Title',
      type: 'string',
    }),
    defineField({
      name: 'contactSectionSubtitle',
      title: 'Contact Section Subtitle',
      type: 'text',
    }),
  ],
})
