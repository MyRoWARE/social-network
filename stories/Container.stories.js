import { Container } from '../components'
const Template = (args) => <Container {...args} />

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Container',
  component: Container
}

export const ContainerLight = Template.bind({})
