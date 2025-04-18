import React, { useState } from "react";

export default function ToolForm({ onAdd }) {
  const [tool, setTool] = useState({
    name: "",
    description: "",
    category: "",
    link: "",
  });

  const handleChange = (e) => {
    setTool({ ...tool, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tool.name && tool.description && tool.category && tool.link) {
      onAdd(tool);
      setTool({ name: "", description: "", category: "", link: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Add New Tool</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Tool Name"
          value={tool.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={tool.category}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="url"
          name="link"
          placeholder="Website Link"
          value={tool.link}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Short Description"
          value={tool.description}
          onChange={handleChange}
          className="border p-2 rounded col-span-1 md:col-span-2"
          required
        />
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Add Tool
      </button>
    </form>
  );
}
