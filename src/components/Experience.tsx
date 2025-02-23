import { motion } from "framer-motion";
import { GlowingEffect } from "./ui/glowing-effect";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { allExpriences } from "@/db";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

const Experience = () => {
  return (
    <section id="experience" className="py-10 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-200 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {allExpriences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative border-0  mb-12 last:pb-0 cursor-pointer"
              variants={item}
            >
              {/* {index !== experiences.length - 1 && (
                <motion.div
                  className="absolute left-[11px] top-[28px] bottom-0 w-[2px] bg-blue-200"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                />
              )} */}

              {/* <motion.div
                className="absolute left-0 top-[6px] bg-blue-500 rounded-full p-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <Briefcase className="w-4 h-4 text-white" />
              </motion.div> */}

              <motion.div
                className=" rounded-lg p-[0px]  shadow-sm hover:shadow-md transition bg-muted"
                // whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <GlowingEffect
                  blur={0}
                  borderWidth={3}
                  spread={50}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                {/* <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {exp.title}
                </h3>
                <div className="text-blue-600 dark:text-gray-200 font-medium mb-2">
                  {exp.company}
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                  {exp.period}
                </div>
                <p className="text-gray-600 dark:text-gray-200">
                  {exp.description}
                </p> */}
                <Card className="w-full ">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center flex-wrap gap-2">
                      <span>{exp.title}</span>
                      <Badge variant="secondary">{exp.period}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-gray-600 dark:text-gray-400 mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
