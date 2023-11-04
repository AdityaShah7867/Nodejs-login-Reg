import React, { useState } from "react";

const AddCouses = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");

  const AddP = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/v1/product/AddP", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          price,
          desc,
        }),
      });

      const data = await response.json();

      if (response.status === 201) {
        alert("Product successful!");
        localStorage.setItem("token", data.Token);
      } else {
        alert("Product add failed");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred");
    }
  };

  return (
    <div style={{textAlign: "center", margin: "auto", maxWidth: "600px"}}>
    <h1 style={{fontSize: "1.5rem", marginTop: "2rem"}}>Add Courses here</h1>

    <div style={{maxWidth: "32rem", margin: "auto"}}>
        <div style={{padding: "4rem", borderRadius: "0.375rem", background: "#fff", border: "0.0625rem solid #e2e8f0", marginTop: "2.25rem"}}>
            <form onSubmit={AddP}>
                <div style={{display: "grid", gap: "1.5rem"}}>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        style={{width: "100%", border: "0.0625rem solid #d1d5db", borderRadius: "0.375rem", padding: "0.5rem 0.75rem", outline: "none"}}
                    />

                    <input
                        type="number"
                        value={price}
                        id="price"
                        name="price"
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Price"
                        style={{width: "100%", border: "0.0625rem solid #d1d5db", borderRadius: "0.375rem", padding: "0.5rem 0.75rem", outline: "none"}}
                    />

                    <input
                        type="file"
                        id="file"
                        name="file"
                        placeholder="Charger votre fichier"
                        style={{width: "100%", border: "0.0625rem solid #d1d5db", borderRadius: "0.375rem", padding: "0.625rem 0.75rem", outline: "none"}}
                    />

                    <textarea
                        name="desc"
                        rows={2}
                        cols
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Description"
                        style={{width: "100%", border: "0.0625rem solid #d1d5db", borderRadius: "0.375rem", padding: "0.5rem 0.75rem", outline: "none"}}
                    />

                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none focus:ring-4 focus:ring-blue-300"
                        style={{backgroundColor: "blue", border: "none", borderRadius: "0.375rem", fontSize: "1rem", cursor: "pointer"}}
                    >
                        ADD Course
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>


  )
}

export default AddCouses