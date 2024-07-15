import AppBar from "./AppBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Calendar from "./Calendar";

const Home: React.FC  = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <AppBar />
        <Calendar/>
      </div>
    </QueryClientProvider>
  );
};
export default Home;
