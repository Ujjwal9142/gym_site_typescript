import { ClassType, SelectedPage } from "@/shared/types";
import Image1 from "@/assets/image1.png";
import Image2 from "@/assets/image2.png";
import Image3 from "@/assets/image3.png";
import Image4 from "@/assets/image4.png";
import Image5 from "@/assets/image5.png";
import Image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HeaderText from "@/shared/HeaderText";
import Class from "./Class";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const classes: Array<ClassType> = [
  {
    name: "Weight Traning Classes",
    description:
      "Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Orci ac auctor augue mauris augue neque gravida in fermentum.",
    image: Image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Vel pharetra vel turpis nunc eget lorem. Eget mi proin sed libero enim sed faucibus. Purus gravida quis blandit turpis cursus in hac.",
    image: Image2,
  },
  {
    name: "Ab core Classes",
    description:
      "Interdum velit laoreet id donec ultrices. Elit eget gravida cum sociis natoque penatibus et magnis. Purus non enim praesent elementum est.",
    image: Image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Rutrum quisque non tellus orci ac auctor augue mauris augue. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit.",
    image: Image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Scelerisque eleifend donec pretium vulputate. Duis ut porttitor massa id.",
    image: Image5,
  },
  {
    name: "Traning Classes",
    description:
      "Id faucibus nisl tincidunt eget nullam non. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Ultrices neque ornare aenean euismod.",
    image: Image6,
  },
];

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HeaderText>OUR CLASSES</HeaderText>
            <p className="py-5">
              Pellentesque diam volutpat commodo sed egestas egestas. Semper
              quis lectus nulla at volutpat diam ut. Lectus urna duis convallis
              convallis tellus id interdum velit. Fringilla phasellus faucibus
              scelerisque eleifend donec. Amet massa vitae tortor condimentum.
              Libero justo laoreet sit amet. Pulvinar proin gravida hendrerit
              lectus. Integer vitae justo eget magna.
            </p>
          </div>
        </motion.div>

        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-secondary-500">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index: number) => (
              <Class
                name={item.name}
                description={item.description}
                image={item.image}
                key={`${item.name}-${index}`}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
