"use client";

import Image from "next/image";
import HeadingText from "../../../heading-text";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function Body() {
  return (
    <section className="flex flex-col md:flex-row gap-8 lg:gap-16 justify-center space-y-8 lg:space-y-16 relative px-20 pt-20 lg:max-w-7xl mx-auto">
      <div>
        <motion.div
          initial={{ opacity: 0, y: "10%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {" "}
          <HeadingText className="bg-clip-text mb-14">
            Stakeholders & Users
          </HeadingText>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
            <span>
              <h1 className="text-lg font-semibold  mb-8">STAKEHOLDERS</h1>
              <h1 className="font-semibold text-muted-foreground mb-4">
                Household Companions of the Host
              </h1>
              <p className="mb-8">
                Consideration for other household members is crucial, as the
                app's designation of a repeated host can directly impact their
                experience with family or friends at the host's house.
              </p>
              <h1 className="font-semibold text-muted-foreground mb-4">
                Board Game Manufacturers
              </h1>
              <p className="mb-8">
                The app enhances the likelihood of games being purchased and
                played, providing valuable insights for game makers, such as
                trending games.
              </p>
            </span>
            <span>
              <h1 className="text-lg font-semibold text-foreground mb-8">
                USERS
              </h1>
              <h1 className="font-semibold text-muted-foreground mb-4">
                Game Night Participants
              </h1>
              <p className="mb-8">
                Simplifying game night scheduling, this tool reduces stress and
                minimizes the need for constant inquiries about details,
                promoting more meaningful communication within the group.
              </p>
              <h1 className="font-semibold text-muted-foreground mb-4">
                Game Night Organizer
              </h1>
              <p className="mb-12">
                Streamlining the organizational process for game nights, it
                makes coordination seamless and less stressful for the
                organizer.
              </p>
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: "10%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            className="mb-32 mt-20 rounded-xl border shadow-lg"
            src="/images/boga/empathy-map.png"
            alt="Empathy Map"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "10%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14"
        >
          <HeadingText className="bg-clip-text">User Research</HeadingText>

          <span>
            <h1 className="text-lg font-semibold mb-4">
              Based on six interviews with participants of varying experience
              and game preferences:
            </h1>

            <div className="flex flex-row mb-2 gap-3">
              <div className="text-muted-foreground">●</div>
              <div>
                Enjoyable game nights last 4-6 hours with 4-8 participants,
                occasionally unscheduled with 3 days to a week's notice.
              </div>
            </div>
            <div className="flex flex-row mb-2 gap-3">
              <div className="text-muted-foreground">●</div>
              <div>
                Planning is done inefficiently through online sources or phone
                calls.
              </div>
            </div>
            <div className="flex flex-row mb-2 gap-3">
              <div className="text-muted-foreground">●</div>
              <div>
                Participants prefer in-person game nights but hosted some online
                during the pandemic, and locations vary based on the host's
                suggestion.
              </div>
            </div>
            <div className="flex flex-row mb-2 gap-3">
              <div className="text-muted-foreground">●</div>
              <div>
                Games vary in complexity, from Dungeons and Dragons to simpler
                ones like Sorry; typically, 1-4 games are played with breaks as
                needed, and unfinished games are often dropped due to time
                constraints.
              </div>
            </div>
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "10%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14"
        >
          <HeadingText className="bg-clip-text">Major Insights</HeadingText>

          <span>
            <div className="flex flex-row mb-2 gap-3">
              <div className="text-muted-foreground">●</div>
              <div>
                People enjoy game nights and the social interaction they
                provide, but organizing events over weeks and months can be
                tiresome.
              </div>
            </div>
            <div className="flex flex-row mb-2 gap-3">
              <div className="text-muted-foreground">●</div>
              <div>
                Our app aims to address this core issue by providing crucial
                advanced notifications for organized game nights.
              </div>
            </div>
            <div className="flex flex-row mb-2 gap-3">
              <div className="text-muted-foreground">●</div>
              <div>
                Users follow the plan, and early notifications allow time to
                address potential issues.
              </div>
            </div>
            <div className="flex flex-row mb-2 gap-3">
              <div className="text-muted-foreground">●</div>
              <div>
                The ultimate goal is to enhance social interactions during game
                nights, fostering a relaxed atmosphere for play with clear
                expectations.
              </div>
            </div>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
