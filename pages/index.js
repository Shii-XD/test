import { useState } from 'react';

export default function Home() {
  const [number, setNumber] = useState('');
  const [log, setLog] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendCommand = async (command) => {
    if (!number.match(/^[0-9]+$/)) {
      alert("Nomor hanya angka!");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000)); // simulate delay
    const waktu = new Date().toLocaleString();
    setLog({ waktu, number, command });
    setLoading(false);
    alert(`Perintah '${command}' dikirim (dummy)`);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">🧠 Web3 Bot Panel (Dummy)</h1>

      <input
        type="tel"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Masukkan Nomor (628xx)"
        className="bg-gray-800 text-white border border-cyan-400 rounded px-4 py-2 mb-4 w-64 text-center focus:outline-none"
      />

      <div className="flex gap-4 mb-6">
        <button
          className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white"
          onClick={() => sendCommand('crash-ui')}
        >
          Crash UI
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded text-black"
          onClick={() => sendCommand('bulldozer')}
        >
          Bulldozer
        </button>
        <button
          className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded text-white"
          onClick={() => sendCommand('invible')}
        >
          Invible
        </button>
      </div>

      {log && (
        <div className="bg-gray-900 p-4 rounded-lg w-full max-w-md text-left border border-cyan-400">
          <p><strong>🕒 Waktu:</strong> {log.waktu}</p>
          <p><strong>📞 Nomor:</strong> {log.number}</p>
          <p><strong>🔘 Perintah:</strong> {log.command}</p>
        </div>
      )}

      <a href="https://t.me/yourtelegram" className="mt-6 text-cyan-400 hover:underline" target="_blank" rel="noreferrer">
        Contact Dev via Telegram
      </a>

      {loading && <p className="text-sm mt-2">⏳ Mengirim perintah (dummy)...</p>}
    </div>
  );
}