import { useJobs } from "../context/JobProvider";

export default function Applications() {
  const { state, dispatch } = useJobs();

  async function handleFetchJobs() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();

      const statuses = ["pending", "interview", "rejected", "offer"] as const;

      const jobs = data.slice(0, 10).map((todo: any) => {
        const randomCompany = Math.floor(Math.random() * 100) + 1;
        const randomStatus =
          statuses[Math.floor(Math.random() * statuses.length)];

        return {
          id: String(todo.id),
          company: `Company ${randomCompany}`,
          role: todo.title,
          status: randomStatus,
        };
      });

      jobs.forEach((job) =>
        dispatch({ type: "ADD_JOB", payload: job })
      );
    } catch (err) {
      console.error(`Error message: ${err}`);
    }
  }

  return (
    <div>
      <ul className="job-list">
        {state.jobs.map((j) => (
          <li key={j.id} className="job-item">
            <span className="job-company">{j.company}</span>
            <span className="job-role">{j.role}</span>
            <span className={`job-status status-${j.status}`}>
              {j.status}
            </span>
          </li>
        ))}
      </ul>

      <button onClick={handleFetchJobs} className="fetch-btn">
        Search Jobs
      </button>
    </div>
  );
}
