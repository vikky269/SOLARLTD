import React from "react";

const Specifications: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 border rounded-lg shadow-lg bg-white">
      {/* Header */}
      {/* <div className="text-center mb-6">
        <h1 className="text-2xl font-bold uppercase">Hongkong Wecan Ltd</h1>
        <p className="text-sm">Room 405, Wanda Square, Yuncheng West Rd., GZ</p>
        <div className="text-sm">
          <p>
            <span className="font-semibold">Contact:</span> Allen
          </p>
          <p>
            <span className="font-semibold">Tel:</span> 0086 13660665127
          </p>
          <p>
            <span className="font-semibold">Email:</span> office@hkwecanltd.com
          </p>
        </div>
      </div> */}

      {/* Invoice Info */}
      {/* <div className="flex justify-between text-sm mb-6">
        <div>
          <p className="font-semibold">Proforma Invoice</p>
        </div>
        <div className="text-right">
          <p>
            <span className="font-semibold">Date:</span> 16/5/2024
          </p>
          <p>
            <span className="font-semibold">Invoice No:</span> Wecan 89757
          </p>
        </div>
      </div> */}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Series No.</th>
              <th className="border px-4 py-2 text-left">Specification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 font-bold">WECAN 02</td>
              <td className="border px-4 py-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <p>
                      <span className="font-semibold">Rated Power:</span> 2000w
                    </p>
                    <p>
                      <span className="font-semibold">Maximum Power:</span> 2000w
                    </p>
                    <p>
                      <span className="font-semibold">Battery Type:</span> Lead
                      Acid Battery
                    </p>
                    <p>
                      <span className="font-semibold">Battery Capacity:</span>{" "}
                      72V32AH
                    </p>
                    <p>
                      <span className="font-semibold">Charging Time:</span>{" "}
                      3.5–7H
                    </p>
                    <p>
                      <span className="font-semibold">Max Range:</span>{" "}
                      100–120KM
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="font-semibold">Max Speed:</span> 70KM/H
                    </p>
                    <p>
                      <span className="font-semibold">Climbing Angle:</span> 14°
                    </p>
                    <p>
                      <span className="font-semibold">Weight:</span> 150KG
                    </p>
                    <p>
                      <span className="font-semibold">LWH:</span> 1960×760×1200
                    </p>
                    <p>
                      <span className="font-semibold">Ground Clearance:</span>{" "}
                      130mm
                    </p>
                    <p>
                      <span className="font-semibold">Wheelbase:</span> 1350mm
                    </p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Specifications;
