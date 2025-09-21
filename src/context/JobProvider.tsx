import { useReducer, createContext, useContext, ReactNode  } from "react";

interface Job {
  id: string;
  company: string;
  role: string;
  status: "pending" | "interview" | "rejected" | "offer"
}

interface JobState {
  jobs: Job[]
}

type JobAction =
  | { type: "ADD_JOB"; payload: Job }
  | { type: "REMOVE_JOB"; payload: string }
  | { type: "UPDATE_STATUS"; payload: { id: string; status: Job["status"] } };

function jobReducer(state: JobState, action: JobAction): JobState {
  switch(action.type) {
    case "ADD_JOB":
      return { ...state, jobs: [...state.jobs, action.payload] };

    case "REMOVE_JOB":
      return { ...state, jobs: state.jobs.filter((j) => j.id !== action.payload) };

    case "UPDATE_STATUS":
      return {
        ...state,
        jobs: state.jobs.map((j) =>
          j.id === action.payload.id ? { ...j, status: action.payload.status } : j
        ),
      };

    default:
      return state;
  }
}

const initialState: JobState = {
  jobs: []
}

const JobContext = createContext<{
  state: JobState;
  dispatch: React.Dispatch<JobAction>;
} | null>(null)



export default function JobProvider({children} : {children: ReactNode}) {
  const [state, dispatch] =  useReducer(jobReducer, initialState);

  return (
    <JobContext.Provider value={{state, dispatch}} >
      {children}
    </JobContext.Provider>
  )
}

export function useJobs() {
  const context = useContext(JobContext);

  if(!context) throw new Error("useJobs must be used within a JobProvider");
  return context
}