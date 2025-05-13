import SummaryCard from "../components/ui/SummaryCard";

function App() {
  return (
    <main>
      <section id="card_summaries" className="grid grid-cols-2 md:grid-cols-4 gap-5 ">
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
      </section>
    </main>
  );
}

export default App;
