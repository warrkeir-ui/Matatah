const StaffPage = () => (
  <main className="max-w-6xl mx-auto px-4 py-8">
    <h2 className="text-2xl font-bold mb-6">Our Staff</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl shadow p-4 text-center">
        <img src="file:///mnt/data/Daycare Staff-Stefanie.jpeg" alt="Stefanie Boyd" className="w-32 h-32 object-cover rounded-full mx-auto mb-2"/>
        <h3 className="font-semibold text-emerald-900">Stefanie Boyd</h3>
        <p className="text-sm text-emerald-700">Owner/Director, CDA, CPR, 20+ years experience</p>
      </div>
      <div className="bg-white rounded-xl shadow p-4 text-center">
        <img src="file:///mnt/data/Daycare Staff-Kennedy.jpeg" alt="Kennedy Warr" className="w-32 h-32 object-cover rounded-full mx-auto mb-2"/>
        <h3 className="font-semibold text-emerald-900">Kennedy Warr</h3>
        <p className="text-sm text-emerald-700">Infant Lead Teacher, 4 years experience, CPR</p>
      </div>
      <div className="bg-white rounded-xl shadow p-4 text-center">
        <img src="file:///mnt/data/Daycare Staff-Kathy.jpeg" alt="Kathy Bailey" className="w-32 h-32 object-cover rounded-full mx-auto mb-2"/>
        <h3 className="font-semibold text-emerald-900">Kathy Bailey</h3>
        <p className="text-sm text-emerald-700">Toddler Lead Teacher, 10+ years experience, CPR</p>
      </div>
      <div className="bg-white rounded-xl shadow p-4 text-center">
        <img src="file:///mnt/data/Daycare Staff-Heaven.jpeg" alt="Heaven Harris" className="w-32 h-32 object-cover rounded-full mx-auto mb-2"/>
        <h3 className="font-semibold text-emerald-900">Heaven Harris</h3>
        <p className="text-sm text-emerald-700">4 years experience, CPR, working on CDA</p>
      </div>
      <div className="bg-white rounded-xl shadow p-4 text-center">
        <img src="file:///mnt/data/Daycare Staff-Keir.jpeg" alt="Keir Warr" className="w-32 h-32 object-cover rounded-full mx-auto mb-2"/>
        <h3 className="font-semibold text-emerald-900">Keir Warr</h3>
        <p className="text-sm text-emerald-700">5 years experience, CDA, CPR, finishing Associate's</p>
      </div>
    </div>
  </main>
);
