import HeaderText from "@/shared/HeaderText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    title: "State of the Art Facilities",
    description:
      "Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Tristique nulla aliquet enim tortor at auctor urna nunc id. Integer enim neque volutpat ac tincidunt. In nisl nisi scelerisque eu ultrices. Ut sem viverra aliquet eget.",
    icon: <HomeModernIcon className="h-6 w-6" />,
  },
  {
    title: "100's of Diverse Classes",
    description:
      "Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Non arcu risus quis varius. Sem fringilla ut morbi tincidunt augue interdum. Sed nisi lacus sed viverra. Mauris augue neque gravida in. Est sit amet facilisis magna etiam tempor orci.",
    icon: <UserGroupIcon className="h-6 w-6" />,
  },
  {
    title: "Expert and Pro Trainers",
    description:
      "Morbi tristique senectus et netus et malesuada. Senectus et netus et malesuada fames ac. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Massa eget egestas purus viverra accumsan in nisl.",
    icon: <AcademicCapIcon className="h-6 w-6" />,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HeaderText>MORE THAN JUST A GYM.</HeaderText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.{" "}
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {benefits.map((benefit) => (
            <Benefit
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Graphics and Description */}

        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <img
            alt="benefits_page_graphic"
            src={BenefitsPageGraphic}
            className="mx-auto"
          />

          {/* Description */}
          <div>
            {/* Title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HeaderText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HeaderText>
                </motion.div>
              </div>
            </div>

            {/* Description Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Sed tempus urna et pharetra pharetra massa massa ultricies mi.
                Nisl nisi scelerisque eu ultrices. Lorem ipsum dolor sit amet
                consectetur adipiscing. Enim sed faucibus turpis in eu mi
                bibendum neque. Habitant morbi tristique senectus et. Cras
                ornare arcu dui vivamus arcu felis bibendum ut. Eget felis eget
                nunc lobortis mattis aliquam faucibus. Tempor orci dapibus
                ultrices in iaculis nunc sed augue lacus. Mi ipsum faucibus
                vitae aliquet nec ullamcorper sit amet risus. Lectus mauris
                ultrices eros in cursus. Vitae aliquet nec ullamcorper sit amet.
                Id consectetur purus ut faucibus pulvinar elementum integer enim
                neque. Quis lectus nulla at volutpat diam.
              </p>
              <p className="mb-5">
                Pellentesque diam volutpat commodo sed egestas egestas. Semper
                quis lectus nulla at volutpat diam ut. Lectus urna duis
                convallis convallis tellus id interdum velit. Fringilla
                phasellus faucibus scelerisque eleifend donec. Amet massa vitae
                tortor condimentum. Libero justo laoreet sit amet. Pulvinar
                proin gravida hendrerit lectus. Integer vitae justo eget magna.
                Donec ac odio tempor orci. Turpis tincidunt id aliquet risus
                feugiat.
              </p>
            </motion.div>
            {/* Button */}
            <div className="relative mt-16">
              <div className="before:absolute before:right-40 before:-bottom-20 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
