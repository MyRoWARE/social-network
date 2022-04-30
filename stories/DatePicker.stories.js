import React from "react";
import { DatePicker } from "../components/DatePicker";

//problems with anonymous variable but working anyways
export default {
  title: "DatePicker",
  component: DatePicker,
  argTypes: { inputChange: { action: "input change" } },
};

//template
const Template = (args) => <DatePicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "DatePicker",
};
