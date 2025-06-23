"use client";

import expStyles from "./expertise.module.scss";

import { bottomIn, bottomInContainer } from "@/utils/variants";
import clsx from "clsx";
import { m } from "framer-motion";

export default function HomeExpertise() {
  return (
    <section id="expertise" className={expStyles.expertise}>
      <div className={clsx(expStyles.container, "container")}>
        <m.h2
          variants={bottomIn()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={clsx(expStyles.heading, "text-6xl")}
        >
          Expertise
        </m.h2>
        <m.div
          variants={bottomInContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={expStyles.content}
        >
          <m.div
            variants={bottomIn(0, 20)}
            className={expStyles["content-box"]}
          >
            <div>
              <div className={expStyles["content-header"]}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-12z" />
                    <path d="M3 13h18" />
                    <path d="M8 21h8" />
                    <path d="M10 17l-.5 4" />
                    <path d="M14 17l.5 4" />
                  </svg>
                </span>
                <h3 className={clsx(expStyles["content-title"], "text-3xl")}>
                  Full-Stack Development
                </h3>
              </div>
              <p
                className={clsx(
                  expStyles["content-text"],
                  "text-sm leading-normal"
                )}
              >
                I build complete web applications using Next.js with API routes and the MERN stack. While primarily frontend-focused, I can handle backend development including databases, APIs, and server-side logic to deliver end-to-end solutions.
              </p>
            </div>
          </m.div>
          <m.div
            variants={bottomIn(0, 20)}
            className={expStyles["content-box"]}
          >
            <div>
              <div className={expStyles["content-header"]}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
                    <path d="M9 10h6" />
                    <path d="M9 14h6" />
                    <path d="M9.5 7.5c.5 -1 1.5 -1 2.5 -1s2 0 2.5 1" />
                  </svg>
                </span>
                <h3 className={clsx(expStyles["content-title"], "text-3xl")}>
                  UI/UX Implementation
                </h3>
              </div>
              <p
                className={clsx(
                  expStyles["content-text"],
                  "text-sm leading-normal"
                )}
              >
                I excel at translating design mockups into pixel-perfect, interactive web applications. I work closely with designers to ensure seamless implementation using CSS, Tailwind CSS, and modern animation libraries.
              </p>
            </div>
          </m.div>
          <m.div
            variants={bottomIn(0, 20)}
            className={expStyles["content-box"]}
          >
            <div>
              <div className={expStyles["content-header"]}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12h3l3 8l3 -16l3 8h3" />
                  </svg>
                </span>
                <h3 className={clsx(expStyles["content-title"], "text-3xl")}>
                  Web Performance & Optimization
                </h3>
              </div>
              <p
                className={clsx(
                  expStyles["content-text"],
                  "text-sm leading-normal"
                )}
              >
                I optimize web applications for speed and performance using modern techniques like code splitting, lazy loading, and efficient state management. I ensure fast loading times and smooth user interactions across all devices.
              </p>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
