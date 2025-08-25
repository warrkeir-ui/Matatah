    <section>
      <h3 className="text-xl font-bold text-emerald-900 mb-4">Parent Testimonials</h3>
      <img src={safeImg(IMG.testimonials)} alt="Parent Testimonials" className="rounded-2xl shadow mx-auto" />
    </section>

    {/* Staff Preview */}
    <section>
      <h3 className="text-xl font-bold text-emerald-900 mb-4">Meet Our Staff</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="text-center">
          <img src="file:///mnt/data/Daycare Staff-Stefanie.jpeg" alt="Stefanie Boyd" className="w-24 h-24 rounded-full mx-auto object-cover shadow"/>
          <p className="mt-2 font-semibold">Stefanie Boyd</p>
          <p className="text-xs text-emerald-700">Director</p>
        </div>
        <div className="text-center">
          <img src="file:///mnt/data/Daycare Staff-Kennedy.jpeg" alt="Kennedy Warr" className="w-24 h-24 rounded-full mx-auto object-cover shadow"/>
          <p className="mt-2 font-semibold">Kennedy Warr</p>
          <p className="text-xs text-emerald-700">Infant Lead</p>
        </div>
        <div className="text-center">
          <img src="file:///mnt/data/Daycare Staff-Kathy.jpeg" alt="Kathy Bailey" className="w-24 h-24 rounded-full mx-auto object-cover shadow"/>
          <p className="mt-2 font-semibold">Kathy Bailey</p>
          <p className="text-xs text-emerald-700">Toddler Lead</p>
        </div>
        <div className="text-center">
          <img src="file:///mnt/data/Daycare Staff-Heaven.jpeg" alt="Heaven Harris" className="w-24 h-24 rounded-full mx-auto object-cover shadow"/>
          <p className="mt-2 font-semibold">Heaven Harris</p>
          <p className="text-xs text-emerald-700">Toddler Teacher</p>
        </div>
        <div className="text-center">
          <img src="file:///mnt/data/Daycare Staff-Keir.jpeg" alt="Keir Warr" className="w-24 h-24 rounded-full mx-auto object-cover shadow"/>
          <p className="mt-2 font-semibold">Keir Warr</p>
          <p className="text-xs text-emerald-700">Preschool Teacher</p>
        </div>
      </div>
      <div className="mt-4 text-center">
        <NavLink to="/staff" className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700">Meet All Staff →</NavLink>
      </div>
    </section>
