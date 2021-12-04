import * as yup from "yup";

const UploadSchema = yup.object().shape({
  title: yup.string().required("Please enter the title"),
  description: yup.string().required("Please enter description"),
  beds: yup.number().required("Please enter the amount of beds"),
  rooms: yup.number().required("Please enter the amount of rooms"),
  bathrooms: yup.number().required("Please enter the amount of bathrooms"),
  persons: yup.number().required("Please enter the amount of persons"),
  price: yup.number().required("Please enter the price per night"),
  keyless: yup
    .boolean()
    .required("Please check box if keyless entry available"),
  featured: yup.boolean().required("Please check box if you place is featured"),
  categories: yup.string().required("Please select category"),
  featured_media: yup.mixed().required("Please upload a featured image"),
  media: yup.mixed().required("Please upload images"),
});

export default UploadSchema;
