import React from "react";

function Hero() {
  const article = {
    title: {
      id: "Buat Akun",
      en: "Create Product",
    },
    description: {
      id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
      en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
    },
  };
  return (
    <div>
      <div className="text-center">
        <img
          src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
          className="img-fluid mx-auto d-block"
          alt="Logo Bootstrap"
          width="
      71.53px"
        />
        <h2>{article.title.en}</h2>
        <br />
        <p> {article.description.en} </p>
      </div>
    </div>
  );
}

export default Hero;
