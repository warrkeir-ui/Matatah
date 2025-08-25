const EnrollmentPage = () => (
  <main className="max-w-4xl mx-auto px-4 py-8">
    <h2 className="text-2xl font-bold mb-4">Enrollment Information</h2>
    <p className="mb-4">Hours: {HOURS}</p>

    {/* Download link for enrollment packet */}
    <a
      href="file:///mnt/data/Complete Enrollment Packet (1).pdf"
      download="HakunaMatatah-Enrollment-Packet.pdf"
      className="px-4 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800"
    >
      📄 Download Enrollment Packet
    </a>
  </main>
);
