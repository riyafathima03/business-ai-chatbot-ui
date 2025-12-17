import React, { useState } from "react";

export default function Settings() {
  const [responseSpeed, setResponseSpeed] = useState("Balanced");
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(2000);

  const [emailNotif, setEmailNotif] = useState(true);
  const [queryAlerts, setQueryAlerts] = useState(false);
  const [systemUpdates, setSystemUpdates] = useState(true);

  const [authRequired, setAuthRequired] = useState(true);
  const [sessionTimeout, setSessionTimeout] = useState(30);

  return (
    <div className="w-full min-h-screen bg-[#F5F7FA] py-10 px-6 flex justify-center">
      <div className="w-full max-w-4xl space-y-10">
        
        {/* Page header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
          <p className="text-gray-500 mt-1">
            Configure your AI chatbot preferences
          </p>
        </div>

        {/* CARD 1: Language & Timezone */}
        <Card title="General Settings">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputSelect
              id="language"
              label="Default Language"
              value="English"
              options={["English", "French", "Hindi"]}
            />

            <InputSelect
              id="timezone"
              label="Timezone"
              value="UTC"
              options={["UTC", "IST", "PST", "EST"]}
            />
          </div>
        </Card>

        {/* CARD 2: AI Response Settings */}
        <Card title="AI Response Settings">
          <InputSelect
            id="speed"
            label="Response Speed"
            value={responseSpeed}
            onChange={(e) => setResponseSpeed(e.target.value)}
            options={["Fast", "Balanced", "Detailed"]}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <InputField
              id="maxTokens"
              label="Max Tokens"
              value={maxTokens}
              onChange={(e) => setMaxTokens(e.target.value)}
            />

            <InputField
              id="temperature"
              label="Temperature"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
            />
          </div>

          <div className="mt-6">
            <Toggle
              label="Enable Streaming Responses"
              value={true}
              onChange={() => {}}
            />
          </div>
        </Card>

        {/* CARD 3: Notifications */}
        <Card title="Notifications">
          <Toggle
            label="Email Notifications"
            value={emailNotif}
            onChange={setEmailNotif}
          />
          <Toggle
            label="Query Alerts"
            value={queryAlerts}
            onChange={setQueryAlerts}
          />
          <Toggle
            label="System Updates"
            value={systemUpdates}
            onChange={setSystemUpdates}
          />
        </Card>

        {/* CARD 4: Security */}
        <Card title="Security">
          <Toggle
            label="Require Authentication"
            value={authRequired}
            onChange={setAuthRequired}
          />

          <div className="mt-4">
            <InputField
              id="sessionTimeout"
              label="Session Timeout (minutes)"
              value={sessionTimeout}
              onChange={(e) => setSessionTimeout(e.target.value)}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

/* --------------------------
   REUSABLE COMPONENTS
-------------------------- */

function Card({ title, children }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
      {children}
    </div>
  );
}

function InputSelect({ id, label, value, onChange, options }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
      >
        {options.map((op) => (
          <option key={op}>{op}</option>
        ))}
      </select>
    </div>
  );
}

function InputField({ id, label, value, onChange }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
      />
    </div>
  );
}

function Toggle({ label, value, onChange }) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm font-medium text-gray-700">{label}</span>

      <button
        aria-label={label}
        onClick={() => onChange(!value)}
        className={`w-12 h-6 rounded-full flex items-center transition-all ${
          value ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow transform transition ${
            value ? "translate-x-6" : "translate-x-1"
          }`}
        ></div>
      </button>
    </div>
  );
}
