function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-blue-400 mb-3">
          Terhemen Hangeior Donald
        </h2>

        <p className="text-gray-400 mb-6">
          Graphic Designer • Front-End Developer • Education Professional
        </p>

        <hr className="border-gray-700 mb-6" />

        <p className="text-gray-500">
          © {year} Terhemen Hangeior Donald. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;