import { PasswordInput } from '../components'

const Template = (args) => <PasswordInput {...args} />

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'PasswordInput',
  component: PasswordInput,
  argTypes: { inputChange: { action: 'input change' } }
}

export const Password = Template.bind({})
Password.args = {
  type: 'password',
  error: false
}

export const PasswordWithError = Template.bind({})
PasswordWithError.args = {
  type: 'password',
  error: true
}
