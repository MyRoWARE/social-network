import { Title } from '../components'

const Template = (args) => <Title {...args} />

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Title',
  component: Title,
  argTypes: { inputChange: { action: 'input change' } }
}

export const SignIn = Template.bind({})
SignIn.args = {
  heading: 'Sign In',
  subheading: `Welcome back, you've been missed!`
}

export const GettingStarted = Template.bind({})
GettingStarted.args = {
  heading: 'Forgot password?',
  subheading: 'Enter your details to receive a rest link'
}

export const CheckEmail = Template.bind({})
CheckEmail.args = {
  heading: 'Check your email',
  subheading: `We've sent a link to your email address: `
}
