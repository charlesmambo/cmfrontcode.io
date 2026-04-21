import React, { useState } from 'react';
import '../leaderboard/LeaderBoard.css';
import { IoCodeSlashSharp } from "react-icons/io5";
import { FaFireAlt } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";
import { HiTrophy } from "react-icons/hi2";

const users = [
  { rank: 4, name: "Alex Thompson", points: "10,120", solved: 41, streak: 15, progress: 70 },
  { rank: 5, name: "Sarah Chen", points: "9,850", solved: 38, streak: 11, progress: 60 },
  { rank: 6, name: "James Miller", points: "9,620", solved: 36, streak: 7, progress: 55 },
];

const LeaderBoard = () => {
  const [active, setActive] = useState("all");

  return (
    <div className="leaderboard">

      {/* HERO */}
      <div className="leaderboard_content">
        <h1>Leaderboard</h1>
        <p>See who's crushing it. Climb the ranks and earn your place.</p>

        <div className="toggle">
          {["all", "monthly", "weekly"].map((item) => (
            <button
              key={item}
              className={active === item ? "active" : ""}
              onClick={() => setActive(item)}
            >
              {item === "all" ? "All Time" : item}
            </button>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="leaderboard_stats">

        <div className="leaderboard_stat">
          <div className="leaderboard_stat_title">
            <div className="leaderboard_icon fire"><FaFireAlt /></div>
            <h2>1,247</h2>
          </div>
          <p>Active Users This Week</p>
        </div>

        <div className="leaderboard_stat">
          <div className="leaderboard_stat_title">
            <div className="leaderboard_icon rocket"><MdRocketLaunch /></div>
            <h2>342</h2>
          </div>
          <p>Challenges Completed Today</p>
        </div>

        <div className="leaderboard_stat">
          <div className="leaderboard_stat_title">
            <div className="leaderboard_icon trophy"><HiTrophy /></div>
            <h2>12,450</h2>
          </div>
          <p>Highest Score This Week</p>
        </div>

      </div>

      {/* TOP 3 */}
      <div className="top3">

        <div className="leaderboard_card silver">
          <div className="top3_ranks rank_2">2</div>
          <div className="top_avatar avatar_2"></div>
          <h4>Ryan Cooper</h4>
          <span>@ryan</span>
          <p className='highlight highlight_2'>11,820
            <span className='highlight_points'>points</span>
          </p>
        </div>

        <div className="leaderboard_card gold">
          <div className="top3_ranks rank_1">1</div>
          <div className="top_avatar avatar_1"></div>
          <h4>Jessica Taylor</h4>
          <span>@leader</span>
          <p className="highlight highlight_1">12,450
            <span className='highlight_points'>points</span>
          </p>
        </div>

        <div className="leaderboard_card bronze">
          <div className="top3_ranks rank_3">3</div>
          <div className="top_avatar avatar_3"></div>
          <h4>Sophie Anderson</h4>
          <span>@sophie</span>
          <p className='highlight highlight_3'>10,990
            <span className='highlight_points'>points</span>
          </p>
        </div>

      </div>

      {/* FULL LIST */}
      <div className="leaderboard_list">
        <h3>Full Rankings</h3>

        {users.map((u) => (
          <div className="row" key={u.rank}>

            <div className="left">
              <span className="rank-num">{u.rank}</span>
              <div className="avatar small"></div>

              <div className='user_name_content'>
                <p>{u.name}</p>
                <div className="user_name">
                  <span>@sophie</span>
                </div>
              </div>
            </div>

            <div className="right">
              <span className='cn_solved'><IoCodeSlashSharp className='cn_solved_icon'/>
{u.solved} solved</span>
              <div className="points_box">
              <strong>{u.points}</strong>
              <span>points</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default LeaderBoard;