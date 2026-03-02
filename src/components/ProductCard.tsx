export default function ProductCard() {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">Tai nghe Bluetooth</h2>
        <p className="text-gray-500 mt-2 text-sm">Âm thanh hay, pin trâu, kết nối nhanh.</p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-red-500">499.000₫</span>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Mua ngay</button>
        </div>
      </div>
    </div>
  );
}
