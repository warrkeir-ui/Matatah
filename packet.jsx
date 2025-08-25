const EnrollmentPage = () => (
  <main className="max-w-4xl mx-auto px-4 py-8">
    <h2 className="text-2xl font-bold mb-4">Enrollment Information</h2>
    <p className="mb-4">Hours: {HOURS}</p>

    {/* Direct download link to uploaded packet */}
    <a
      href="/mnt/data/Complete Enrollment Packet (1).pdf"
      download="HakunaMatatah-Enrollment-Packet.pdf"
      className="inline-block px-4 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition"
    >
      📄 Download Enrollment Packet
    </a>

    {/* Fallback message in case file path fails */}
    <p className="mt-3 text-sm text-emerald-900 italic">
      If the download link does not work, please contact the director for a copy of the packet.
    </p>
  </main>
);
