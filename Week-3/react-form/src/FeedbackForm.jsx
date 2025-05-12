import React from "react";
import { FeedbackDisplay } from "./FeedbackDisplay";

export const FeedbackForm = (props) => {
  const [feedbacks, setFeedbacks] = React.useState([]);
  const [formData, setFormData] = React.useState({
    name: "",
    rating: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedbacks([...feedbacks, formData]);
    setFormData({
      name: "",
      rating: "",
      comments: "",
    });
    console.log("Feedback submitted:", formData);
    alert("Feedback submitted successfully!");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full sm:p-8 max-w-lg mx-auto border border-gray-200"
      >
        <h1 className="text-2xl text-gray-800 mb-4 text-center font-extrabold ">
          Feedback Form
        </h1>
        <p className="text-base text-gray-600 text-center mb-4">
          We value your feedback!
          <br /> Please fill out the form below to help us improve our services.{" "}
        </p>
        <div className="flex flex-col gap-2 w-md mx-auto">
          <label
            htmlFor="name"
            className="text-lg font-bold text-left text-stone-900"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            onChange={handleChange}
            value={formData.name}
            name="name"
            placeholder="Enter your name ..."
            className="border text-stone-900 border-gray-500 placeholder-gray-800 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <label
            htmlFor="rating"
            className="text-lg font-bold text-left text-stone-900"
          >
            Rating:
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            onChange={handleChange}
            value={formData.rating}
            min="1"
            max="5"
            placeholder="Rate us from 1 to 5 ..."
            className="border border-gray-500 text-stone-900 placeholder-gray-800 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <label
            htmlFor="comments"
            className="text-lg font-bold text-left text-stone-900"
          >
            Comments:
          </label>
          <textarea
            id="comments"
            onChange={handleChange}
            value={formData.comments}
            name="comments"
            placeholder="Enter your comments ..."
            rows="4"
            className="border border-gray-500 text-stone-900 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out mt-4"
          >
            Submit
          </button>
        </div>
      </form>
      <FeedbackDisplay feedbacks={feedbacks} />
    </div>
  );
};
