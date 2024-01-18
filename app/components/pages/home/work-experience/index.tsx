import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experience-item"
import { WorkExperience as IWorkExperience } from "@/app/types/work-experience"

type WorkExperienceProps = {
    experiences: IWorkExperience[]
}

export const WorkExperience = ({ experiences }: WorkExperienceProps) => {
    return (
        <section className="py-16 bg-gray-950">
            <div className="container flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
                <div className="max-w-[420px]">
                    <SectionTitle title="Experiência profissional" subtitle="experiências" />
                    <p className="text-gray-400 mt-6">
                        Estou disponível para enfrentar novos desafios e colaborar em projetos que demandem minha experiência.
                        Podemos trabalhar em conjunto para desenvolver soluções eficazes para a sua empresa.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {experiences?.map(experience => (
                        <ExperienceItem key={experience.companyName} experience={experience} />
                    ))}
                </div>
            </div>
        </section>
    )
}