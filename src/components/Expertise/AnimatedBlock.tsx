import { motion} from "framer-motion";
import { useRef } from "react";

type Props = {
  children: JSX.Element;
  width?: 'fit-content' | '100%';
};

export const AnimatedBlock: React.FC<Props> = ({ children, width = 'fit-content' }) => {
  const ref = useRef(null);

  return (
    <div
      style={{ position: 'relative', width }}
      ref={ref}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial='hidden'
        whileInView='visible'
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
