import { useNavigate } from "react-router-dom";

export default function Landing() {
  const nav = useNavigate();

  function handleEnter() {
    nav("/dashboard"); // vai direto para Applications
  }

  return (
    <section>
      <h1>💬 Job Application Tracker</h1>
      <p>
        Keep track of all your job applications in one place.
      </p>
      <button onClick={handleEnter}>
        Enter Dashboard
      </button>
    </section>
  );
}

