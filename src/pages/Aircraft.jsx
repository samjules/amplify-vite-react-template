import React, { useState } from 'react';
import { Tabs, Collection, Card, Heading, Text, Button } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/data';

const client = generateClient(); // ✅ No need for <Schema>





const Aircraft = () => {
  const [aircraftList, setAircraftList] = useState([
    { name: 'Boeing 737', description: 'A reliable short to medium-haul aircraft.' },
    { name: 'Airbus A320', description: 'A popular narrow-body airliner.' },
  ]);

  // Function to add a new aircraft
  const addAircraft = async () => {
    try {
      const newAircraft = {
        name: `New Aircraft ${aircraftList.length + 1}`, // Dynamic name
        description: 'A newly added aircraft.',
      };

      const { errors, data } = await client.models.Aircraft.create(newAircraft);

      if (errors) {
        console.error('Error adding aircraft:', errors);
      } else {
        console.log('Aircraft added:', data);
        setAircraftList([...aircraftList, newAircraft]); // Update state to show new aircraft
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  return (
    <div>
      <h1>Aircraft Page</h1>

      <Tabs
        defaultValue="1"
        items={[
          {
            label: 'View Fleet',
            value: '1',
            content: (
              <div>
                <Collection type="list" items={aircraftList} gap="1.5rem">
                  {(item, index) => (
                    <Card key={index} padding="1rem">
                      <Heading level={4}>{item.name}</Heading>
                      <Text>{item.description}</Text>
                    </Card>
                  )}
                </Collection>
              </div>
            ),
          },
          {
            label: 'Manage Fleet',
            value: '2',
            content: (
              <div>
                <h2>Manage Your Aircraft Fleet</h2>
                <Button onClick={addAircraft}>Add Aircraft</Button>
              </div>
            ),
          },
        ]}
        isLazy
      />
    </div>
  );
};

export default Aircraft;