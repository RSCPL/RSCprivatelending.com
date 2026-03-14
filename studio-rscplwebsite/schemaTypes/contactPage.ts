import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
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
      name: 'heroEyebrow',
      title: 'Hero Eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
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
    defineField({
      name: 'formDisclaimer',
      title: 'Form Disclaimer',
      type: 'text',
    }),
    defineField({
      name: 'officeTitle',
      title: 'Office Title',
      type: 'string',
    }),
    defineField({
      name: 'officeDescription',
      title: 'Office Description',
      type: 'text',
    }),
  ],
})
