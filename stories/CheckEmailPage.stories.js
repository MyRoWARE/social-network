import CheckEmailPage from '../pages/CheckEmailPage'
const Template = (args) => <CheckEmailPage {...args} />

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'CheckEmailPage',
  component: CheckEmailPage
}

export const CheckEmailTest = Template.bind({})
CheckEmailTest.args = {
  email: 'sampleemail@gmail.com'
}

export const CheckEmailTest2 = () => <CheckEmailPage />
Primary.storyName = 'Email Story Test'
