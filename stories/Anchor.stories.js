import { AnchorButton } from '../components'

const Template = (args) => <AnchorButton {...args} />
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'ArchorButton',
  component: AnchorButton,
  argTypes: { inputChange: { action: 'input change' } }
}

export const SignIn = Template.bind({})
SignIn.args = {
  anchorTitle: 'Sign Up'
}

export const Back = Template.bind({})
Back.args = {
  anchorTitle: '< Back to Sign In'
}

export const CheckEmail = Template.bind({})
CheckEmail.args = {
  anchorTitle: 'john@gmail.com'
}

export const Resend = Template.bind({})
Resend.args = {
  anchorTitle: 'Resend'
}
