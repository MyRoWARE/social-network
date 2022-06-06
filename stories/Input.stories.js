import { TextInput } from '../components/Form/NameInput';
// import { PasswordInput } from '../components'

const Template = (args) => <TextInput {...args} />;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'TextInput',
  component: TextInput,
  argTypes: { inputChange: { action: 'input change' } },
};

export const Name = Template.bind({});
Name.args = {
  type: 'name',
  error: false,
};

export const NameWithError = Template.bind({});
NameWithError.args = {
  type: 'name',
  error: true,
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  error: false,
};

export const EmailWithError = Template.bind({});
EmailWithError.args = {
  type: 'email',
  error: true,
};

// export const PasswordInputStory = {
//   title: 'PasswordInput',
//   component: PasswordInput,
//   argTypes: { inputChange: { action: 'input-change' } }
// }

// This logic will go to the parent component i.e. the signup/login form
// const [nameError, setNameError] = useState(false);
// 	const [emailError, setEmailError] = useState(false);

// 	const validateEmail = email => {
// 		return String(email)
// 			.toLowerCase()
// 			.match(
// 				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// 			);
// 	};
// 	const validateName = email => {
// 		return /^[A-Za-z ]+$/.test(email);
// 	};

// 	const nameChange = event => {
// 		console.log("name:", event.target.value);
// 		if (!validateName(event.target.value)) {
// 			setNameError(true);
// 		} else {
// 			setNameError(false);
// 		}
// 	};

// 	const emailChange = event => {
// 		console.log("email: ", event.target.value);
// 		if (!validateEmail(event.target.value)) {
// 			setEmailError(true);
// 		} else {
// 			setEmailError(false);
// 		}
// 	};
