'use client';

import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Link } from '../../../link';
import { SectionTitle } from '../../../section-title';
import { motion } from 'framer-motion';

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] flex flex-col items-center justify-center px-2">
      <SectionTitle
        title={'Meus Projetos'}
        subtitle={'projetos'}
        className="text-center items-center [&>h3:text4xl]"
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Aqui você pode ver alguns dos projetos pessoais e profissionais que
          atuei em minha carreira. Navegue e explore para ver como foram
          criados, quais tecnologias foram usadas ou como ficou o resultado
          final dos trabalhos.
        </p>
        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          Voltar para Home
        </Link>
      </motion.div>
    </section>
  );
};
