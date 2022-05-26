import { PostCard } from '../components'

const Template = (args) => <PostCard {...args} />

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Post Card',
  component: PostCard
}

export const MobilePostCard = Template.bind({})
