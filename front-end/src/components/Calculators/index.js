import React, { useState } from "react";


function Calculators() {
  const initialFormData = {
    weight: "",
    reps: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [result, setResult] = useState(null);

  /*
  
  1RM = w ÷ [(1.0278) – (0.0278 x r)]
   W = weight, R = number of reps

   */

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let max = formData.weight / [1.0278 - 0.0278 * formData.reps];

    setResult(Math.floor(max));
  };

  return (
    <>
      <h4>Estimated One Rep Max Calculator</h4>
      <form onSubmit={handleSubmit}>
        <label>Weight Used</label>
        <input
          id="weight"
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
        <label>Number of Reps</label>
        <input
          id="reps"
          type="number"
          name="reps"
          value={formData.reps}
          onChange={handleChange}
        />
        <label>RPE</label>
        <input id="rpe" type="number" name="rpe" />

        <h4>Estimated Max {result}</h4>

        <button type="submit">Calculate</button>
      </form>
    </>
  );
}

export default Calculators;
