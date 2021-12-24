import * as React from "react";
import axios from "axios";

const index = () => {
  const [pertanyaan, setPertanyaan] = React.useState("");

  const fetchQuestion = async (e) => {
    const { kategori } = e.target.dataset;

    try {
      const { data } = await axios.get(`/api/question?category=${kategori}`);

      if (data) {
        setPertanyaan(data.text);
      } else {
        setPertanyaan("Pertanyaannya gak ketemu boss!");
      }
    } catch (error) {
      console.error(error);
      setPertanyaan(
        "Keknya ada yang salah di server, dasar programmer magang!"
      );
    }
  };
  return (
    <div className="container">
      <h2>Selamat datang pecundang!</h2>

      <p>
        Tekan tombol truth untuk mendapatkan pertanyaan tentang truth dan dare
        untuk mendapatkan tantangan tentang dare
      </p>

      <button onClick={fetchQuestion} data-kategori="TRUTH">
        Truth
      </button>
      <button onClick={fetchQuestion} data-kategori="DARE">
        Dare
      </button>

      <p>
        <strong>{pertanyaan}</strong>
      </p>
    </div>
  );
};

export default index;
