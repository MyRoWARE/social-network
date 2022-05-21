import { PostInput } from '../components'

const Template = (args) => <PostInput {...args} />

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Post Input',
  component: PostInput
}

export const PostInputDefault = Template.bind({})
