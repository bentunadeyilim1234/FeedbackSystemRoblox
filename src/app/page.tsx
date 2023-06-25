'use client';

import UserCard from "../components/usercard";

type FeedbackType = {
  id: string;
  feedbackId: number;
  feedback: string;
  playerName: string;
  userId: number;
  rating: number;
};

async function getData() {
  const res = await fetch('https://feedback-system-roblox.vercel.app/api/all', { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function Home() {
  const data:FeedbackType[] = [] //await getData()
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
