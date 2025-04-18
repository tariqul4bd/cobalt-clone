import React, { useState } from "react";
import toolsData from "./data/toolsData";
import ToolCard from "./components/ToolCard";
import ToolForm from "./components/ToolForm"; // 🆕 Form Import

const categories = ["All", "Chatbot", "Image", "Writing"];

export default function App() {
  const [tools, setTools] = useState(toolsData); // 🆕 Dynamic state
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // 🆕 Add tool function
  const addTool = (newTool) => {
    const updatedTools = [...tools, { id: tools.length + 1, ...newTool }];
    setTools(updatedTools);
  };

  const filtered = tools.filter((tool) => {
    const matchCategory = category === "All" || tool.category === category;
    const matchSearch = tool.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">AI Tools Directory</h1>

      {/* 🆕 Tool Add Form */}
      <ToolForm onAdd={addTool} />

      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search tools..."
          className="border p-2 w-full md:w-1/2 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
