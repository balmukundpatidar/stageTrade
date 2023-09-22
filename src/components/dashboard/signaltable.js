import Image from "next/image";
import React from "react";

const SignalTable = ({ data, limit }) => {
  return (
    <table className="w-full text-sm text-left">
      <thead className="bg-white text-sm text-lightBlue font-medium sticky top-0">
        <tr>
          <th scope="col" className="py-3">
            Prediction
          </th>
          <th scope="col" className="py-3">
            Asset
          </th>
          <th scope="col" className="py-3">
            Date published
          </th>
          <th scope="col" className="py-3">
            Active
          </th>
        </tr>
      </thead>
      <tbody className="text-darkGray font-medium">
        {data && data.length ? (
          data.map((signals, i) =>
            !limit || i < limit ? (
              <tr className="border-t border-lightBorder" key={i}>
                <td>{signals.prediction}</td>
                <td className="py-4">{signals.asset}</td>
                <td className="py-4">{signals.datepublished}</td>
                <td className="py-4">
                  <div
                    className={`inline-flex items-center px-2 py-1 gap-x-2 text-xs font-normal  bg-opacity-20 rounded ${
                      signals.active == "Yes"
                        ? "text-pigmentGreen bg-pigmentGreen"
                        : "text-danger bg-danger"
                    }`}
                  >
                    <Image
                      src={`/assets/images/${
                        signals.active == "Yes" ? "check.svg" : "cancel.svg"
                      }`}
                      alt=""
                      width={12}
                      height={12}
                      loading="lazy"
                    />
                    <span>{signals.active}</span>
                  </div>
                </td>
              </tr>
            ) : null
          )
        ) : (
          <tr>
            <td colSpan="4">No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default SignalTable;
