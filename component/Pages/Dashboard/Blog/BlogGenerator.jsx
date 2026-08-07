import React, { useState , useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { nanoid } from "nanoid"; // npm i nanoid
// import { useLocation } from "react-router-dom";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";



const componentsList = [
  { label: "Title", value: "headline", icon: "📝" },
  { label: "Sub-heading", value: "subheadline", icon: "🔹" },
  { label: "Article", value: "paragraph", icon: "📄" },
  { label: "Image", value: "image", icon: "🖼️" },
  { label: "FAQ", value: "faq", icon: "❓" },
  { label: "List", value: "list", icon: "📋" },         
  { label: "Table", value: "table", icon: "📊" },
  { label: "Slug", value: "slug", icon: "🔗" },
  { label: "Link", value: "link", icon: "🖇️" }
];
   
const API_BASE = process.env.NEXT_PUBLIC_API_URL;


const createBlock = (type) => ({ id: nanoid(), type, data: {} });

// default blog blocks
const defaultBlocks = [
  { id: nanoid(), type: "slug", data: { text: "Your Blog slugs" } },
  { id: nanoid(), type: "headline", data: { text: "Your Blog Title" } },
  { id: nanoid(), type: "paragraph", data: { text: "Write your article here…" } },
  { id: nanoid(), type: "faq", data: { faqs: [{ question: "", answer: "" }] } },
];



// --------------------------------------------------------------------
//  MAIN COMPONENT
// --------------------------------------------------------------------
export default function BlogGenerator() {
  const [uploadingImages, setUploadingImages] = useState(false);
  const [blogBlocks, setBlogBlocks] = useState(defaultBlocks);
  const [mode, setMode] = useState("edit"); // "edit" | "preview"
  const [blogSubmitted, setBlogSubmitted] = useState(false); // ✅ new state


  const location = usePathname();
  const navigate = useRouter();

const editMode = location.state?.editMode || false;
const editBlog = location.state?.blog || null;


useEffect(() => {
  if (editMode && editBlog?.blogs_data) {
    const clonedData = editBlog.blogs_data.map(block => ({
      id: nanoid(), // optional: keep same or new
      type: block.type,
      data: Array.isArray(block.data.faqs)
        ? { faqs: block.data.faqs.map(f => ({ ...f })) } // clone FAQ list properly
        : { ...block.data }, // clone text/image/subheadline safely
    }));
    setBlogBlocks(clonedData);
    setBlogSubmitted(false);
  }
}, [editMode, editBlog]);




  const handleImageUpload = async (file, blockId) => {
    setUploadingImages(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "blog_image_upload");

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/dz7wmzang/image/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.secure_url) {
        updateBlock(blockId, "fileUrl", data.secure_url);
      } else {
        alert("Image upload failed");
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload failed. See console for details.");
    } finally {
      setUploadingImages(false);
    }
  };

  const submitBlog = async () => {
    if (uploadingImages) {
      alert("Please wait until image upload finishes.");
      return;
    }

    if (blogSubmitted) {
      alert("You have already submitted a blog. Reset to create a new one.");
      return;
    }

    try {
      const blogData = blogBlocks.map((block) => ({
        type: block.type,
        data: block.data,
      }));

      // console.log("Submitting blogData:", blogData);

      const token = localStorage.getItem("authToken");

      const endpoint = editMode
      ? `${API_BASE}/api/blogs/${editBlog.id}`
      : `${API_BASE}/api/blogs`;
      const method = editMode ? "PUT" : "POST";

      // const response = await fetch(`${API_BASE}/api/blogs`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${token}`,
      //   },
      //   body: JSON.stringify({ blogData }),
      // });

      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ blogData }),
      });

      const result = await response.json();
      if (response.ok) {
        alert(editMode ? "Blog updated successfully!" : "Blog submitted successfully!");
        setBlogSubmitted(true); // ✅ mark as submitted
      } else {
        alert("Error submitting blog: " + result.message);
      }
    } catch (error) {
      console.error("Error submitting blog:", error);
      alert("Error submitting blog!");
    }
  };

  const resetBlog = () => {
    setBlogBlocks(defaultBlocks);
    setMode("edit");
    setBlogSubmitted(false); // ✅ allow new blog
  };

  /* ------------------------------- mutators */
  const addBlock = (type) => {
    if (blogSubmitted) {
      alert("Reset first to add a new blog.");
      return;
    }
    if (type === "headline" && blogBlocks.some((block) => block.type === "headline")) {
      alert("You can only have one Title!");
      return;
    }
    setBlogBlocks((p) => [...p, createBlock(type)]);
  };

  const removeBlock = (id) => setBlogBlocks((p) => p.filter((b) => b.id !== id));

  const updateBlock = (id, k, v) =>
    setBlogBlocks((p) =>
      p.map((b) => (b.id === id ? { ...b, data: { ...b.data, [k]: v } } : b))
    );

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = Array.from(blogBlocks);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setBlogBlocks(reordered);
  };

  /* ------------------------------- editor field renderer */
  const FieldEditor = (block) => {
    switch (block.type) {
      case "slug": {
        return (
          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">Slug</label>
            <input
              type="text"
              className="border rounded-md px-4 py-2 w-full focus:ring-blue-300"
              placeholder="example: my-first-blog-post"
              value={block.data.text || ""}
              onChange={(e) => {
                // automatically convert spaces to hyphens and lowercase
                const slug = e.target.value
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^a-z0-9-]/g, ""); 
                updateBlock(block.id, "text", slug);
              }}
            />
            <p className="text-sm text-gray-500">
              This will be used in your blog URL.
            </p>
          </div>
        );
      }      
      case "headline": {
        return (
          <input
            className="border rounded-md px-4 py-2 w-full focus:ring-blue-300"
            placeholder="Enter title…"
            value={block.data.text || ""}
            onChange={(e) => updateBlock(block.id, "text", e.target.value)}
          />
        );
      }
      case "link":{
        return(
          <div  className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">Link Name</label>
            <input
            className="border rounded-md px-4 py-2 w-full focus:ring-blue-300"
            placeholder="Enter Link Name"
            value={block.data.text || ""}
            onChange={(e) => updateBlock(block.id, "text", e.target.value)}
          />
          <label className="font-medium text-gray-700">Link Adress</label>
          <input
            className="border rounded-md px-4 py-2 w-full focus:ring-blue-300"
            placeholder="Enter Link Adress"
            value={block.data.linkurl || ""}
            onChange={(e) => updateBlock(block.id, "linkurl", e.target.value)}
          />
          </div>
        )
      }
      case "subheadline": {
        const sizeClasses = {
          h1: "text-4xl font-bold",
          h2: "text-3xl font-semibold",
          h3: "text-2xl font-semibold",
          h4: "text-xl font-medium",
          h5: "text-lg font-medium",
          h6: "text-base font-medium",
        };
        return (
          <>
            <select
              className="border rounded-md px-3 py-2 w-full focus:ring-blue-300"
              value={block.data.level || "h2"}
              onChange={(e) => updateBlock(block.id, "level", e.target.value)}
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={`h${n}`}>
                  {`H${n}`}
                </option>
              ))}
            </select>
            <input
              className={`border rounded-md px-4 py-2 w-full focus:ring-blue-300 ${sizeClasses[block.data.level || "h2"]}`}
              placeholder="Sub-heading text…"
              value={block.data.text || ""}
              onChange={(e) => updateBlock(block.id, "text", e.target.value)}
            />
          </>
        );
      }
      case "paragraph": {
        return (
          <textarea
            className="border rounded-md px-4 py-2 w-full resize-none focus:ring-blue-300"
            rows={6}
            placeholder="Article paragraph…"
            value={block.data.text || ""}
            onChange={(e) => updateBlock(block.id, "text", e.target.value)}
          />
        );
      }
      case "image": {
        return (
          <div className="flex flex-col gap-3">
            <input
              type="file"
              accept="image/*"
              className="border rounded-md px-3 py-2 w-full"
              disabled={uploadingImages}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleImageUpload(file, block.id);
              }}
            />
            {block.data.fileUrl ? (
              <img
                src={block.data.fileUrl}
                alt={block.data.alt || ""}
                className="w-60 rounded-lg shadow mx-auto"
                loading="lazy"
              />
            ) : (
              <p className="text-center text-gray-500 text-sm">
                Upload an image
              </p>
            )}
            {/* ALT TEXT INPUT */}
      <input
        type="text"
        className="border rounded-md px-3 py-2 w-full"
        placeholder="Describe the image (ALT text for SEO)"
        value={block.data.alt || ""}
        onChange={(e) => updateBlock(block.id, "alt", e.target.value)}
      />
            {uploadingImages && (
              <p className="text-sm text-gray-500">
                Uploading image... Please wait.
              </p>
            )}
          </div>
        );
      }
      case "list": {
        const items = block.data.items || [""];
        const changeItem = (idx, val) => {
          const updated = [...items];
          updated[idx] = val;
          updateBlock(block.id, "items", updated);
        };
        return (
          <div className="flex flex-col gap-3">
            {items.map((item, i) => (
              <div key={i} className="flex gap-2">
                <input
                  className="border rounded-md px-3 py-2 w-full"
                  placeholder={`List item ${i + 1}`}
                  value={item}
                  onChange={(e) => changeItem(i, e.target.value)}
                />
                <button
                  onClick={() => {
                    const updated = items.filter((_, idx) => idx !== i);
                    updateBlock(block.id, "items", updated);
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              onClick={() => updateBlock(block.id, "items", [...items, ""])}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 self-start"
            >
              Add Item
            </button>
          </div>
        );
      }

      case "table": {
        const tableData =
          block.data.tableData || { headers: ["Column 1", "Column 2"], rows: [["", ""]] };
      
        const updateCell = (rIdx, cIdx, value) => {
          const newRows = tableData.rows.map((row, i) =>
            i === rIdx ? row.map((cell, j) => (j === cIdx ? value : cell)) : row
          );
          updateBlock(block.id, "tableData", { ...tableData, rows: newRows });
        };
      
        const addRow = () => {
          const newRow = tableData.headers.map(() => "");
          updateBlock(block.id, "tableData", {
            ...tableData,
            rows: [...tableData.rows, newRow],
          });
        };
      
        const addColumn = () => {
          const newHeader = `Column ${tableData.headers.length + 1}`;
          const updatedRows = tableData.rows.map((row) => [...row, ""]);
          updateBlock(block.id, "tableData", {
            headers: [...tableData.headers, newHeader],
            rows: updatedRows,
          });
        };
      
        const removeRow = (rIdx) => {
          if (tableData.rows.length <= 1) return; // prevent empty table
          const updatedRows = tableData.rows.filter((_, i) => i !== rIdx);
          updateBlock(block.id, "tableData", { ...tableData, rows: updatedRows });
        };
      
        const removeColumn = (cIdx) => {
          if (tableData.headers.length <= 1) return; // prevent empty table
          const updatedHeaders = tableData.headers.filter((_, i) => i !== cIdx);
          const updatedRows = tableData.rows.map((row) =>
            row.filter((_, i) => i !== cIdx)
          );
          updateBlock(block.id, "tableData", {
            headers: updatedHeaders,
            rows: updatedRows,
          });
        };
      
        return (
          <div className="flex flex-col gap-4">
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 rounded-lg">
                <thead>
                  <tr>
                    {tableData.headers.map((h, i) => (
                      <th key={i} className="border p-2 text-left bg-gray-100">
                        <div className="flex items-center gap-2">
                          <input
                            className="border-b w-full"
                            value={h}
                            onChange={(e) => {
                              const newHeaders = [...tableData.headers];
                              newHeaders[i] = e.target.value;
                              updateBlock(block.id, "tableData", {
                                ...tableData,
                                headers: newHeaders,
                              });
                            }}
                          />
                          {/* 🗑 Remove Column Button */}
                          <button
                            onClick={() => removeColumn(i)}
                            className="text-red-500 hover:text-red-700 text-sm"
                            title="Remove column"
                          >
                            ✖
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.rows.map((row, rIdx) => (
                    <tr key={rIdx}>
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="border p-2">
                          <input
                            className="w-full border-b"
                            value={cell}
                            onChange={(e) => updateCell(rIdx, cIdx, e.target.value)}
                          />
                        </td>
                      ))}
                      {/* 🗑 Remove Row Button */}
                      <td className="border p-2 text-center">
                        <button
                          onClick={() => removeRow(rIdx)}
                          className="text-red-500 hover:text-red-700 text-sm"
                          title="Remove row"
                        >
                          ✖
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
      
            <div className="flex flex-wrap gap-2">
              <button
                onClick={addRow}
                className="bg-blue-600 text-white px-3 py-2 rounded-md"
              >
                Add Row
              </button>
              <button
                onClick={addColumn}
                className="bg-green-600 text-white px-3 py-2 rounded-md"
              >
                Add Column
              </button>
            </div>
          </div>
        );
      }
      
            
      case "faq": {
        const faqs = block.data.faqs || [{ question: "", answer: "" }];
        const changeFAQ = (idx, key, val) => {
          const copy = [...faqs];
          copy[idx] = { ...copy[idx], [key]: val };
          updateBlock(block.id, "faqs", copy);
        };
        return (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <label htmlFor="faqCount">Number of FAQs:</label>
              <input
                type="number"
                id="faqCount"
                value={faqs.length}
                min="1"
                max="10"
                onChange={(e) => {
                  const count = parseInt(e.target.value);
                  if (count >= 1 && count <= 10) {
                    const newFaqs = [...Array(count)].map(() => ({
                      question: "",
                      answer: "",
                    }));
                    updateBlock(block.id, "faqs", newFaqs);
                  }
                }}
                className="border rounded-md px-3 py-2 w-16"
              />
            </div>
            {faqs.map((f, i) => (
              <div key={i} className="flex flex-col gap-2">
                <input
                  className="border rounded-md px-4 py-2 w-full"
                  placeholder="Question"
                  value={f.question}
                  onChange={(e) => changeFAQ(i, "question", e.target.value)}
                />
                <textarea
                  className="border rounded-md px-4 py-2 w-full resize-none"
                  rows={3}
                  placeholder="Answer"
                  value={f.answer}
                  onChange={(e) => changeFAQ(i, "answer", e.target.value)}
                />
                <button
                  onClick={() => {
                    const copy = faqs.filter((_, idx) => idx !== i);
                    updateBlock(block.id, "faqs", copy);
                  }}
                  className="self-end text-red-500 hover:text-red-700 text-sm"
                >
                  Remove FAQ
                </button>
              </div>
            ))}
            <button
              onClick={() =>
                updateBlock(block.id, "faqs", [
                  ...faqs,
                  { question: "", answer: "" },
                ])
              }
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 self-start"
            >
              Add FAQ
            </button>
          </div>
        );
      }
      default:
        return null;
    }
  };

  /* ------------------------------- preview renderer */
  const FieldPreview = (block) => {
    switch (block.type) {
      case "slug":
  return (
    <p className="text-gray-600 text-sm italic">
      Slug: <span className="font-mono">{block.data.text}</span>
    </p>
  );

      case "headline":
        return <h1 className="text-4xl font-bold">{block.data.text}</h1>;
      case "subheadline": {
        const Tag = block.data.level || "h2";
        const sizeClasses = {
          h1: "text-4xl font-bold",
          h2: "text-3xl font-semibold",
          h3: "text-2xl font-semibold",
          h4: "text-xl font-medium",
          h5: "text-lg font-medium",
          h6: "text-base font-medium",
        };
        return <Tag className={`${sizeClasses[Tag]} mt-4 mb-2`}>{block.data.text}</Tag>;
      }

      case "link":
        return(
          <a href={block.data.linkurl} className="text-blue-600 hover:text-blue-800 underline underline-offset-2" target="_blank">{block.data.text}</a>
        )
      case "paragraph":
        return (
          <p className="leading-7 whitespace-pre-wrap text-gray-800">
            {block.data.text}
          </p>
        );
      case "image":
        return (
          block.data.fileUrl && (
            <img src={block.data.fileUrl} alt={block.data.alt || ""} className="w-full rounded-lg" />
          )
        );
        case "list":
  return (
    <ul className="list-disc pl-6 space-y-2">
      {block.data.items?.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
  case "table":
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              {block.data.tableData?.headers?.map((h, i) => (
                <th key={i} className="border p-2 text-left font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.data.tableData?.rows?.map((row, rIdx) => (
              <tr key={rIdx}>
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className="border p-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  
      case "faq":
        return (
          <div className="space-y-4">
            {block.data.faqs?.map((f, i) => (
              <details key={i} className="border rounded-lg p-4">
                <summary className="font-medium cursor-pointer">
                  {f.question || "(no question)"}
                </summary>
                <p className="mt-2 text-gray-700">{f.answer || ""}</p>
              </details>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  /* ------------------------------- JSX */
  return (
    <div className="h-screen flex bg-gray-50">
      {/* sidebar */}
      <aside className="w-72 shrink-0 bg-white border-r p-6 flex flex-col gap-6 overflow-y-auto">
        <h2 className="text-xl font-semibold">Components</h2>
        <div className="grid gap-3">
          {componentsList.map((c) => (
            <button
              key={c.value}
              onClick={() => addBlock(c.value)}
              className="flex items-center gap-3 px-4 py-3 border rounded-xl shadow-sm hover:bg-gray-100"
              disabled={blogSubmitted}
            >
              <span className="text-2xl">{c.icon}</span>
              <span className="font-medium text-gray-700">{c.label}</span>
            </button>
          ))}
        </div>
        <hr className="my-4" />
        <button
          onClick={() => setMode((m) => (m === "edit" ? "preview" : "edit"))}
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          {mode === "edit" ? "Preview" : "Back to Editor"}
        </button>
        <button
          onClick={resetBlog}
          className={`py-2 rounded-lg text-white mt-3 transition-colors ${
            blogSubmitted
              ? "bg-red-600 hover:bg-red-700"
              : "bg-gray-500 hover:bg-gray-600"
          }`}
        
        >
          Reset Blog
        </button>
      </aside>

      {/* main */}
      <main className="flex-1 overflow-y-auto p-10 space-y-6">
        {mode === "edit" ? (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="editor">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="space-y-6"
                >
                  {blogBlocks.map((block, idx) => (
                    <Draggable key={block.id} draggableId={block.id} index={idx}>
                      {(p) => (
                        <div
                          ref={p.innerRef}
                          {...p.draggableProps}
                          className="bg-white p-5 rounded-2xl shadow flex flex-col gap-4 relative"
                        >
                          <div
                            {...p.dragHandleProps}
                            className="absolute -left-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-grab select-none"
                          >
                            ☰
                          </div>
                          <button
                            onClick={() => removeBlock(block.id)}
                            className="absolute top-3 right-3 text-red-500 hover:text-red-700"
                          >
                            ✕
                          </button>
                          <h4 className="font-semibold capitalize text-gray-700 flex items-center gap-2">
                            {
                              componentsList.find((c) => c.value === block.type)
                                ?.icon
                            }{" "}
                            {block.type}
                          </h4>
                          {FieldEditor(block)}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        ) : (
          <article className="prose lg:prose-md max-w-none">
            {blogBlocks.map((b) => (
              <React.Fragment key={b.id}>{FieldPreview(b)}</React.Fragment>
            ))}
          </article>
        )}

        <h1 className="text-2xl font-bold mb-4">
          {editMode ? "Edit Blog" : "Create New Blog"}
        </h1>

        <button
          onClick={submitBlog}
          className={`py-2 rounded-lg text-white mt-3 transition-colors px-4 ${
            blogSubmitted
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
          disabled={blogSubmitted}
        >
          {/* {blogSubmitted ? "Submitted" : "Submit Blog"} */}
          {editMode ? (blogSubmitted ? "Updated" : "Update Blog") : (blogSubmitted ? "Submitted" : "Submit Blog")}
        </button>
      </main>
    </div>
  );
}