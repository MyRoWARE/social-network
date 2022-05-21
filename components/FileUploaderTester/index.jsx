import { useState } from "react";
import { addPost } from "../../services";

export const FileUploaderTester = () => {
	const [state, setstate] = useState({
		text: "This text is the state during dvelopment",
		comments: [],
	});
	const [postImage, setPostImage] = useState();

	const handleChange = e => {
		setPostImage(e.target.files[0]);
	};
	console.log(state);

	return (
		<div className="h-[500px] my-8">
			<div className="h-full flex items-center justify-center">
				<input
					type="file"
					className="text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                            "
					onChange={handleChange}
				/>
				<button
					className="py-2 px-6 rounded-md bg-indigo-400 text-white"
					onClick={() => addPost(state, postImage)}
				>
					Post
				</button>
			</div>
			<div>{JSON.stringify(state)}</div>
		</div>
	);
};
