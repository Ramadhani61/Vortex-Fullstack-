"use client";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

export default function dashboard() {


  return (
    <div
      className="flex items-center justify-center bg-gray-100 px-4"
      style={{ minHeight: "calc(100svh - 71px)" }}
    >
      <div className="text-amber-600">
        <AccessAlarmIcon />
      </div>
    </div>
  );
}
