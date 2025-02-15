interface PatientDetail {
  label: string
  value: string
}

export function PatientDetails() {
  const details: PatientDetail[] = [
    { label: "Patients Name.", value: "John Doe" },
    { label: "Gender.", value: "Female" },
    { label: "MRN number.", value: "12345676789" },
    { label: "Date of birth.", value: "10-10-2024" },
    { label: "Surgery type.", value: "Knee Replacement" },
    { label: "Consultant.", value: "Mr. Boston John" },
    { label: "Admit date.", value: "05-10-2024" },
    { label: "Discharge date.", value: "15-10-2024" },
    { label: "Patient Phone", value: "12345567890" },
    { label: "Patient Email", value: "Johndoe@Gmail.Com" },
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="grid grid-cols-1 gap-4">
        {details.map((detail) => (
          <div key={detail.label} className="flex">
            <span className="w-32 text-gray-600">{detail.label}</span>
            <span className="text-gray-900">{detail.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

