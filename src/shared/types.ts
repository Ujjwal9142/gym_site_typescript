export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ConatctUs = "contactus",
}

export interface BenefitType {
  title: string;
  description: string;
  icon: JSX.Element;
}

export interface ClassType {
  name: string;
  description?: string; // ? means that the property is optional.
  image: string;
}
