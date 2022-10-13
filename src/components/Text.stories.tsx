import { Text, TextProps } from "./Text";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Amazing text.",
    size: "md",
  },

  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
  args: {
    children: "maybe amazing",
    size: "sm",
  },
};
export const Large: StoryObj<TextProps> = {
  args: {
    children: "it is too big",
    size: "lg",
  },
};
export const CustomComponent: StoryObj<TextProps> = {
  args: {
    size: "lg",
    asChild: true,
    children: <p>Testando</p>,
  },

  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
