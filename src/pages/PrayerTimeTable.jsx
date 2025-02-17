import React from "react";

const PrayerTimeTable = () => {
  return (
    <div className="w-full mx-auto">
      <div className="bg-gray-500 grid grid-cols-1 md:grid-cols-10 l gap-1 p-2">
        {/* Left - Prayer Timetable */}
        <div className="md:col-span-6  bg-blue-900 text-white p-2 md:p-6 shadow-lg">
          <table className="w-full border-collapse text-sm md:text-lg lg:text-2xl">
            <tbody>
              {[
                { name: "FAJR", adhan: "5:27AM", iqamah: "6:00 AM" },
                { name: "DHUHR", adhan: "11:43AM", iqamah: "1:30 PM", highlighted: true },
                { name: "ASR", adhan: "2:38PM", iqamah: "4:00 PM" },
                { name: "MAGHRIB", adhan: "4:22PM", iqamah: "4:27 PM" },
                { name: "ISHA", adhan: "5:43PM", iqamah: "9:05 PM" },
              ].map((prayer, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-500 ${
                    prayer.highlighted ? "bg-gray-300 text-black font-semibold" : "text-base"
                  }`}
                >
                  <td className="p-2 md:p-5">{prayer.name}</td>
                  <td className="p-2 md:p-5 text-3xl lg:text-6xl">
                    <span className="font-semibold">{prayer.adhan.slice(0, -2)}</span>
                    <span className="text-lg lg:text-3xl">{prayer.adhan.slice(-2)}</span>
                  </td>
                  <td className="p-2 md:p-5 text-4xl lg:text-7xl">
                    <span className="font-semibold">{prayer.iqamah.slice(0, -2)}</span>
                    <span className="text-lg md:text-3xl">{prayer.iqamah.slice(-2)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right - Current Time & Extra Info */}
        <div className="md:col-span-4 bg-gray-100 p-2 md:p-6 shadow-lg flex flex-col justify-between">
          {/* Date & Time */}
          <div className="text-center">
            <h4 className="text-lg md:text-2xl font-semibold">RABI AL-THANI 11</h4>
            <h4 className="text-lg md:text-2xl font-semibold mt-2">SUNDAY, DEC 8</h4>
          </div>

          <hr className="mx-auto border-t border-2 border-black my-2 w-[85%]" />

          {/* Current Time */}
          <div className="text-center mt-3 mb-1">
            <h1 className="text-6xl lg:text-8xl font-semibold text-blue-900">
              11:37<span className="text-3xl md:text-5xl">AM</span>
            </h1>
            <h3 className="text-lg md:text-2xl font-semibold mt-6 flex justify-center gap-2">
              NEXT IQAMAH IN <span className="text-3xl md:text-4xl">1:53</span>
            </h3>
          </div>

          <hr className="mx-auto border-t border-2 border-black my-2 w-[85%]" />

          {/* Jumu'ah Section */}
          <div className="text-center">
            <h4 className="text-2xl md:text-3xl font-semibold">JUMU'AH</h4>
            <div className="flex justify-between mx-5 md:mx-0 lg:mx-10 mt-4">
              <div>
                <h2 className="text-3xl md:text-5xl font-semibold">
                  1:00<span className="text-sm md:text-xl">PM</span>
                </h2>
                <p className="text-sm md:text-lg text-gray-600">STARTS</p>
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-semibold">
                  1:30<span className="text-sm md:text-xl">PM</span>
                </h2>
                <p className="text-sm md:text-lg text-gray-600">JUMU'AH</p>
              </div>
            </div>
          </div>

          {/* Sunrise & Sunset */}
          <div className="flex items-center text-sm md:text-xl bg-blue-900 flex-col text-white p-2 gap-2 mt-2">
            <p>
              🌅 SUNRISE{" "}
              <span className="text-lg md:text-2xl font-semibold">
                7:06<span className="text-xs md:text-base">AM</span>
              </span>
            </p>
            <p>
              🌇 SUNSET{" "}
              <span className="text-lg md:text-2xl font-semibold">
                4:22<span className="text-xs md:text-base">PM</span>
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer with Images */}
      <footer className="flex justify-between items-center bg-white px-4">
        <img src="https://png.pngtree.com/png-vector/20231114/ourmid/pngtree-beautiful-dome-clipart-png-image_10590758.png" alt="Left Image" className="w-16 md:w-20" />
        <img src="https://png.pngtree.com/png-vector/20230823/ourmid/pngtree-islamic-mosque-symbol-vector-png-image_6868480.png" alt="Right Image" className="w-16 md:w-20" />
      </footer>
    </div>
  );
};

export default PrayerTimeTable;
