import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    bp: "",
    bmi: "",
    s1: "",
    s2: "",
    s3: "",
    s4: "",
    s5: "",
    s6: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send formData to backend
    console.log(formData); // Just for demonstration, you would send this data to your backend
    alert("Form Submitted");
  };

  return (
    <div className="m-6 flex flex-col justify-center items-center  gap-2 w-[700px]">
      <h1 className="text-base text-center text-red-600">
        Hello Sir/ Ma'am ! Please fill this Form{" "}
      </h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 items-center justify-center mb-5">
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          name="age"
          placeholder="Enter your age"
          className="border-1 rounded-xl py-2 px-4 border-black"
          onChange={handleChange}
        />

        <label htmlFor="sex">Sex:</label>
        <input
          type="text"
          name="sex"
          placeholder="Enter your sex"
          className="border-1 rounded-xl py-2 px-4 border-black"
          onChange={handleChange}
        />

        <label htmlFor="bp">Average blood pressure:</label>
        <input
          type="text"
          name="bp"
          placeholder="Enter your Average blood pressure"
          className="border-1 rounded-xl py-2 px-4 border-black"
          onChange={handleChange}
        />

        <label htmlFor="bmi">BMI:</label>
        <input
          type="text"
          name="bmi"
          placeholder="Enter your BMI"
          className="border-1 rounded-xl py-2 px-4 border-black"
          onChange={handleChange}
        />

        <label htmlFor="s1">S1:</label>
        <input
          type="text"
          name="s1"
          placeholder="Enter your S1"
          className="border-1 rounded-xl py-2 px-4 border-black"
          onChange={handleChange}
        />

        <label htmlFor="s2">S2:</label>
        <input
          type="text"
          name="s2"
          placeholder="Enter your S2"
          className="border-1 rounded-xl py-2 px-4 border-black"
          onChange={handleChange}
        />

        <label htmlFor="s3">S3:</label>
        <input
          type="text"
          name="s3"
          placeholder="Enter your S3"
          className="border-1 rounded-xl py-2 px-4 border-black"
          onChange={handleChange}
        />

        <label htmlFor="s4">S4:</label>
        <input
          type="text"
          name="s4"
          placeholder="Enter your S4"
          className="border-1 rounded-xl py-2 px-4 border-black"
          onChange={handleChange}
        />

        <label htmlFor="s5">S5:</label>
        <input
          type="text"
          name="s5"
          placeholder="Enter your S5"
          className="border-1 rounded-xl py-2 px-4 border-black"
          onChange={handleChange}
        />

        <label htmlFor="s6">S6:</label>
        <input
          type="text"
          name="s6"
          placeholder="Enter your S6"
          className="border-1 rounded-xl py-2 px-4 border-black"
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        />
      </form>
    </div>
  );
};

export default Form;
