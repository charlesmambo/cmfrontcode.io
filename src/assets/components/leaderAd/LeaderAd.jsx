import React from 'react';
import '../leaderAd/LeaderAd.css';
import { FaCrown } from "react-icons/fa";


const LeaderAd = () => {
const users = [
  {
    rank: 1,
    name: "Alex Morgan",
    username: "@alexc0des",
    points: "2,450",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    rank: 2,
    name: "Sarah Chen",
    username: "@sarahdev",
    points: "2,180",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    rank: 3,
    name: "Marcus Johnson",
    username: "@marcusj",
    points: "1,920",
    avatar: "https://i.pravatar.cc/100?img=8",
  },
];
  return (
    <section className="leader_ad_container">
      <div className="leader_ad_grid" />

      <div className="leader_ad_content">
        <p className="leader_ad_tag">COMPETITION</p>

        <h2 className="leader_ad_title">
          Top Developers This Week
        </h2>

        <div className="leader_ad_card">
          {users.map((user) => (
            <div
              key={user.rank}
              className={`leader_ad_row rank-${user.rank}`}
            >
              <div className="leader_ad_left">
                <div className="leader_ad_rank">
                  {user.rank === 1 ? <FaCrown className='king'/> : user.rank}
                </div>

                <img
                  src={user.avatar}
                  alt={user.name}
                  className="leader_ad_avatar"
                />

                <div className='rank_username'>
                  <h4>{user.name}</h4>
                  <span>{user.username}</span>
                </div>
              </div>

              <div className="leader_ad_points">
                <strong>{user.points}</strong>
                <span>points</span>
              </div>
            </div>
          ))}

          <div className="leader_ad_footer">
            <a href="#">View Full Leaderboard →</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeaderAd