import { HeaderProps  } from "./Header";
import { SectionProps } from "./Section";

export const HEADER = {
  name    : "Laura Smith",
  title   : "Frontend Developer",
  website : "laurasmith.website",
} as HeaderProps;

export const SECTIONS = [{ 
    heading : "About",
    body    : `I am a frontend developer with a particular interest in
               making things simple and automating daily tasks. I try to
               keep up with security and best practices, and am always
               looking for new things to learn.`,
  }, {
    heading : "Interests",
    body    : `Food expert. Music scholar. Reader. Internet fanatic. Bacon
               buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee
               fanatic.`,
}] as SectionProps[];
