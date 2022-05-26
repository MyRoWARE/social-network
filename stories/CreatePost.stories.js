import { CreatePost, Backdrop } from '../components';
const Template = (args) => <CreatePost {...args} />;
const Template2 = (args) => (
  <Backdrop {...args}>
    <CreatePost newPost />
  </Backdrop>
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Create Post',
  component: CreatePost,
};

export const CreatePostDefault = Template.bind({});

export const PostWithBackdrop = Template2.bind({});
PostWithBackdrop.args = {
  show: true,
};
