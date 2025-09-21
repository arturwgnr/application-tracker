import { useMemo } from "react";
import { useJobs } from "../context/JobProvider";

export default function Stats() {
  const { state } = useJobs();

  // useMemo calcula só quando state.jobs mudar
  const stats = useMemo(() => {
    return state.jobs.reduce(
      (acc, job) => {
        acc[job.status] += 1;
        return acc;
      },
      { pending: 0, interview: 0, rejected: 0, offer: 0 }
    );
  }, [state.jobs]);

  return (
    <div className="stats">
      <h3 className="stats-title">Statistics</h3>
      <ul className="stats-list">
        <li className="stats-item">Pending: {stats.pending}</li>
        <li className="stats-item">Interview: {stats.interview}</li>
        <li className="stats-item">Rejected: {stats.rejected}</li>
        <li className="stats-item">Offer: {stats.offer}</li>
      </ul>
    </div>
  );
}
