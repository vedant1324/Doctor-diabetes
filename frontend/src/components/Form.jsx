import React from "react";

const Form = () => {
  return (
    <div className="mt-8 flex flex-col gap-2">
      <h1 className="text-base text-center text-red-600">
        Hello Sir/ Ma'am ! Please fill this Form{" "}
      </h1>
      <form action="" className="grid grid-cols-2 gap-4 items-center justify-center mb-5">
        <label htmlFor="input2">Age:</label>
        <input type="text" placeholder="Enter your age" className="border-1 rounded-xl py-2 px-4 border-black" />

        <label htmlFor="input3">Sex:</label>
        <input type="text" placeholder="Enter your sex" className="border-1 rounded-xl py-2 px-4 border-black" />

        <label htmlFor="input4">Average blood pressure:</label>
        <input type="text" placeholder="Enter your Average blood pressure" className="border-1 rounded-xl py-2 px-4 border-black" />

        <label htmlFor="input5">BMI:</label>
        <input type="text" placeholder="Enter your BMI" className="border-1 rounded-xl py-2 px-4 border-black" />

        <label htmlFor="input1">S1:</label>
        <input type="text" placeholder="Enter your S1" className="border-1 rounded-xl py-2 px-4 border-black" />

        <label htmlFor="input6">S2:</label>
        <input type="text" placeholder="Enter your S2" className="border-1 rounded-xl py-2 px-4 border-black" />

        <label htmlFor="input7">S3:</label>
        <input type="text" placeholder="Enter your S3" className="border-1 rounded-xl py-2 px-4 border-black" />

        <label htmlFor="input8">S4:</label>
        <input type="text" placeholder="Enter your S4" className="border-1 rounded-xl py-2 px-4 border-black" />

        <label htmlFor="input9">S5:</label>
        <input type="text" placeholder="Enter your S5" className="border-1 rounded-xl py-2 px-4 border-black" />

        <label htmlFor="input10">S6:</label>
        <input type="text" placeholder="Enter your S6" className="border-1 rounded-xl py-2 px-4 border-black" />
      </form>
    </div>
  );
};

export default Form;
