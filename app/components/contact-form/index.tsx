'use client'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Button } from '../button'
import { SectionTitle } from '../section-title'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { fadeUpAnimation } from '@/app/lib/animation'
const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
})
type ContactFormData = z.infer<typeof contactFormSchema>
export const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })
  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post('/api/contact', data)
      toast.success('Mensagem enviada com sucesso!')
      reset()
    } catch {
      alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.')
    }
  }
  return (
    <section
      id="contact"
      className="py-16 px-6 md:py-32 flex items-center justify-center"
    >
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          title={'Vamos trabalhar juntos? Entre em contato'}
          subtitle={'contato'}
          className="items-center text-center"
        />
        <motion.form
          {...fadeUpAnimation}
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-red-600"
            {...register('name')}
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-red-600"
            {...register('email')}
          />
          <textarea
            placeholder="Mensagem"
            maxLength={500}
            className="resize-none h-[138px] w-full bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-red-600"
            {...register('message')}
          />
          <div className="mt-6 mx-auto">
            <Button className="shadow-button" disabled={isSubmitting}>
              Enviar mensagem
              <HiArrowNarrowRight size={18} />
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
