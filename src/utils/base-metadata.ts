import { appUrl } from ".";
import { Metadata } from "next";

export function baseMetadata({
  title,
  description,
  slug,
  image,
}: {
  title?: string;
  description?: string;
  slug?: string;
  image?: string;
}): Metadata {
  const defTitle = "Emmanuel";
  const defDescription =
    "Hi, I'm Emmanuel. I am a Fullstack Developer specializing in React.js and Next.js. I build modern, responsive web applications with complete backend solutions.";
  const pageTitle = title || defTitle;
  const pageDescription = description || defDescription;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(appUrl),
    keywords: [
      "Emmanuel",
      "Emmanuel Adisa",
      "bohemiancode-x",
      "Fullstack Developer",
      "React Developer",
      "Next.js Developer",
      "JavaScript Developer",
      "TypeScript Developer",
      "Web Developer",
      "Programmer",
      "Coding",
      "Coder",
      "Web Development",
      "React.js",
      "Next.js",
      "TailwindCSS",
      "Fullstack Development",
      "Responsive Design",
    ],
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      images: [
        {
          url: "/assets/images/base.jpg",
          width: 2295,
          height: 1523,
        },
      ],
    },
    openGraph: {
      siteName: defTitle,
      type: "website",
      title: pageTitle,
      description: pageDescription,
      ...(!!slug && { slug: `${appUrl}${slug ?? ""}` }),
      images: [
        {
          url: "/assets/images/base.jpg",
          width: 2295,
          height: 1523,
        },
        ...(!!image
          ? [
              {
                url: image,
              },
            ]
          : []),
      ],
    },
  };
}
