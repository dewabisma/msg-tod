import * as React from "react";
import axios from "axios";

const buat = () => {
  const [pertanyaan, setPertanyaan] = React.useState("");
  const [kategori, setKategori] = React.useState("");
  const [status, setStatus] = React.useState("idle");

  const kategoriChange = (e) => {
    setKategori(e.target.dataset.kategori);
  };

  const submitHandler = async () => {
    try {
      const body = {
        text: pertanyaan,
        category: kategori,
      };

      await axios.post("/api/question", body);

      setStatus("success");
      setPertanyaan("");
    } catch (error) {
      console.error(error);
      setStatus("failed");
    }
  };

  return (
    <div>
      <h2>Buat Pertanyaan/Tantangan Busukmu!</h2>

      {status === "success" && <p>Pertanyaan/Tantangan berhasil dibuat!</p>}
      {status === "failed" && <p>Pertanyaan/Tantangan gagal dibuat!</p>}

      <div className="input-group">
        <label htmlFor="pertanyaan">Pertanyaan/Tantangan</label>
        <input
          id="pertanyaan"
          type="text"
          placeholder="contoh: kenapa kamu bau?"
          value={pertanyaan}
          onChange={(e) => setPertanyaan(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Kategori</label>
        <div>
          <input
            onClick={kategoriChange}
            type="radio"
            name="kategori"
            data-kategori="TRUTH"
          />{" "}
          Truth
        </div>
        <div>
          <input
            onClick={kategoriChange}
            type="radio"
            name="kategori"
            data-kategori="DARE"
          />{" "}
          Dare
        </div>
      </div>

      <button
        onClick={submitHandler}
        type="submit"
        disabled={status === "loading" || !pertanyaan || !kategori}
      >
        {status === "loading" ? "Sedang memuat..." : "Buat Pertanyaan"}
      </button>
    </div>
  );
};

export default buat;
