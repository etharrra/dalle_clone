import React from "react";

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSuspriseMe, handelSuspriseMe }) => {
	return (
		<div>
			<div className="flex items-center gap-2 mb-2">
				<label htmlFor={name} className="block text-sm font-medium text-gray-900">
					{labelName}
				</label>
				{isSuspriseMe && (
					<button type="button" onClick={handelSuspriseMe} className="font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black">
						Susprise Me
					</button>
				)}
			</div>
			<input
				type={type}
				name={name}
				id={name}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				required
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#4649ff] outline-none block  w-full p-3"
			/>
		</div>
	);
};

export default FormField;
