import ProjectHero from "./project-hero";
import ProjectDetails from "./project-details";
import { works } from "@/data";
import { baseMetadata } from "@/utils/base-metadata";
import slug from "slug";
import { notFound } from "next/navigation";

export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const work = works.find(({ name }) => slug(name) === resolvedParams.slug);

  if (!work) {
    return notFound();
  }

  const { name, overview, details, images, year, scope, technologies, link } =
    work;

  return (
    <>
      <ProjectHero
        name={name}
        overview={overview}
        year={year}
        details={details}
        scope={scope}
        technologies={technologies}
        link={link}
      />
      <ProjectDetails images={images} name={name} />
    </>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const work = works.find(({ name }) => slug(name) === resolvedParams.slug);

  return baseMetadata({
    title: work?.name ? `${work?.name} - Emmanuel` : "Project",
    description: work?.overview ?? "Emmanuel - Project",
    slug: `/project/${resolvedParams.slug}`,
  });
}

export function generateStaticParams() {
  return works.map(({ name }) => ({ slug: slug(name) }));
}
