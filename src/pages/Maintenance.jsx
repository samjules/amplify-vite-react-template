import React, { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";

const client = generateClient();  // Initialize client without types (since it's a JS file)

const Aircraft = () => {
  // State for aircraft and form fields
  const [aircrafts, setAircrafts] = useState([]);
  const [model, setModel] = useState("");
  const [tailNumber, setTailNumber] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // Fetch the list of aircraft from the backend
  const fetchAircrafts = async () => {
    try {
      const { data } = await client.models.Aircraft.list();
      setAircrafts(data.items);  // Update state with the fetched aircrafts
    } catch (error) {
      console.error("Error fetching aircrafts:", error);
    }
  };

  // Create a new aircraft
  const createAircraft = async () => {
    try {
      await client.models.Aircraft.create({
        Model: model,
        TailNumber: tailNumber,
        ImageUrl: imageUrl || null,  // Optional image URL
      });

      // Reset form fields after creating the aircraft
      setModel("");
      setTailNumber("");
      setImageUrl("");

      // Fetch updated list of aircrafts
      fetchAircrafts();
    } catch (error) {
      console.error("Error creating aircraft:", error);
    }
  };

  // Fetch aircrafts on component mount
  useEffect(() => {
    fetchAircrafts();
  }, []);

  return (
    <div>
      <h1>Aircraft Management</h1>
      <div>
        <h2>Add New Aircraft</h2>
        <input
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tail Number"
          value={tailNumber}
          onChange={(e) => setTailNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL (Optional)"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button onClick={createAircraft}>Add Aircraft</button>
      </div>

      <h2>Aircraft List</h2>
      <ul>
        {aircrafts.map((aircraft, index) => (
          <li key={index}>
            <p>Model: {aircraft.Model}</p>
            <p>Tail Number: {aircraft.TailNumber}</p>
            {aircraft.ImageUrl && <img src={aircraft.ImageUrl} alt="Aircraft" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Aircraft;