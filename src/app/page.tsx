'use client';

import UserCard from "../components/usercard";
import { useState, useEffect } from 'react';

type FeedbackType = {
  id: string;
  feedbackId: number;
  feedback: string;
  playerName: string;
  userId: number;
  rating: number;
};

async function Home() {
  const [data, setData] = useState<FeedbackType[]>([]); // Set initial value to an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/all');
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">Feedbacks</h1>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
        {data.map((feedback: FeedbackType) => (
          <UserCard
            key={feedback.feedbackId}
            feedback={feedback.feedback}
            userId={feedback.userId}
            playerName={feedback.playerName}
            feedbackId={feedback.feedbackId}
            rating={feedback.rating}
          />
        ))}
      </ul>
    </div>
  );
}

export default Home;
