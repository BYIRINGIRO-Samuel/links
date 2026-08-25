"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.15, ease },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease },
  },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease },
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease },
  },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 56 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.25, ease },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.12,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease },
  },
};

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  variant?: Variants;
  delay?: number;
};

export function Reveal({
  children,
  variant = fadeUp,
  delay = 0,
  className,
  ...props
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variant}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

export function Stagger({
  children,
  className,
  stagger = 0.16,
}: StaggerProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: 0.1 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChild({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

export function MotionSection({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={reduce ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, ease }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export { motion };
