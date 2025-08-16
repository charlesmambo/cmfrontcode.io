import React from 'react';
import '../table/Table.css';

const rankingsData = [
  {
    rank: 4,
    name: "Emma Wilson",
    username: "@emma_ui",
    stats: { points: 2650, challenges: 19, streak: 7 },
  },
  {
    rank: 5,
    name: "David Kim",
    username: "@davidk",
    stats: { points: 2420, challenges: 18, streak: 3 },
  },
  {
    rank: 6,
    name: "Jessica Brown",
    username: "@jess_dev",
    stats: { points: 2180, challenges: 16, streak: 4 },
  },
  {
    rank: 7,
    name: "Ryan Thompson",
    username: "@ryan_t",
    stats: { points: 1950, challenges: 15, streak: 6 },
  },
  {
    rank: 8,
    name: "Lisa Wang",
    username: "@lisa_w",
    stats: { points: 1820, challenges: 14, streak: 2 },
  },
];

const Table = () => {
  return (
    <div className='table-wrapper'>
         <div className="container">
      <div className="header">
        <h3>Full Rankings</h3>
      </div>

      <div className="rankings">
        {rankingsData.map((user) => (
          <div key={user.rank} className="ranking-item">
            <div className="rank">#{user.rank}</div>
            <div className="avatar"></div>
            <div className="user-info">
              <div className="user-name">{user.name}</div>
              <div className="username">{user.username}</div>
            </div>
            <div className="stats">
              <div className="stat">
                <div className="stat-value">{user.stats.points}</div>
                <div className="stat-label">Points</div>
              </div>
              <div className="stat">
                <div className="stat-value">{user.stats.challenges}</div>
                <div className="stat-label">Challenges</div>
              </div>
              <div className="stat">
                <div className="stat-value">{user.stats.streak}</div>
                <div className="stat-label">Streak</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Table