import * as yup from 'yup';

const EditSchema = yup.object().shape({
	title: yup.string().required("Title is required"),
	description: yup.string().required("Description is required"),
});

export default EditSchema;