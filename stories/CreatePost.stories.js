import { CreatePost } from '../components'
const Template = (args) => <CreatePost {...args} />

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Create Post',
  component: CreatePost
}

export const CreatePostDefault = Template.bind({})
