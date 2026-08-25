import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(100, { message: 'Name cannot exceed 100 characters.' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Please enter a valid email address.' })
    .max(255, { message: 'Email cannot exceed 255 characters.' }),
  subject: z
    .string()
    .trim()
    .min(1, { message: 'Please select or provide a subject.' })
    .max(150, { message: 'Subject cannot exceed 150 characters.' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(3000, { message: 'Message cannot exceed 3000 characters.' }),
  // Honeypot field (must remain empty)
  hp_field: z.string().max(0, { message: 'Bot submission detected.' }).optional().or(z.literal('')),
  // Timestamp when the form was rendered on the client to detect instant bot submissions
  renderedAt: z.number().optional(),
})

export type ContactFormInput = z.infer<typeof contactFormSchema>

export interface ContactActionResult {
  success: boolean
  message?: string
  errors?: Partial<Record<keyof ContactFormInput, string[]>>
}
