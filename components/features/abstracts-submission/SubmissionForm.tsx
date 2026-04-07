"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

interface FormData {
  fullName: string;
  email: string;
  affiliation: string;
  abstractTitle: string;
  mobileNo: string;
  attendingAs: string;
  attendanceMode: string;
}

export const SubmissionForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    affiliation: "",
    abstractTitle: "",
    mobileNo: "",
    attendingAs: "Oral Presenter",
    attendanceMode: "",
  });

  const [files, setFiles] = useState<{
    employeeId?: File;
    abstract?: File;
  }>({});

  const [errors, setErrors] = useState<Partial<Record<keyof FormData | "abstract", string>>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files: uploadedFiles } = e.target;
    if (uploadedFiles?.[0]) {
      setFiles((prev) => ({ ...prev, [name === "EmployeeIdUpload" ? "employeeId" : "abstract"]: uploadedFiles[0] }));
      if (name === "AbstractUpload") {
        setErrors((prev) => ({ ...prev, abstract: undefined }));
      }
    }
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData | "abstract", string>> = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.affiliation) newErrors.affiliation = "Affiliation is required";
    if (!formData.abstractTitle) newErrors.abstractTitle = "Abstract Title is required";
    if (!formData.mobileNo) newErrors.mobileNo = "Mobile No. is required";
    if (!formData.attendanceMode) newErrors.attendanceMode = "Please select attendance mode";
    if (!files.abstract) newErrors.abstract = "Please upload your abstract file";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[SubmissionForm] Attempting to submit form...");
    
    if (validate()) {
      console.log("[SubmissionForm] Form validated successfully", { formData, files });
      // In a real app, we would send this data to an API
      alert("Form submitted successfully! (Demo)");
    } else {
      console.warn("[SubmissionForm] Form validation failed", errors);
    }
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6" style={{ color: "#ff6a00" }}>
        Submit Your Abstract:
      </h3>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <form onSubmit={handleSubmit} className="p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
            {/* LEFT COLUMN */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500/20 focus:border-[#ff6a00] outline-none transition-all"
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Students / Employee ID – Upload (For LUC members only)
                </label>
                <input
                  type="file"
                  name="EmployeeIdUpload"
                  onChange={handleFileChange}
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-[#ff6a00] hover:file:bg-orange-100 transition-all cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500/20 focus:border-[#ff6a00] outline-none transition-all"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  You would be attending as: <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <input
                    type="radio"
                    name="attendingAs"
                    value="Oral Presenter"
                    checked={formData.attendingAs === "Oral Presenter"}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-[#ff6a00] focus:ring-[#ff6a00]"
                  />
                  <label className="text-sm text-gray-700">An oral Presenter</label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Upload your abstract here <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  name="AbstractUpload"
                  onChange={handleFileChange}
                  accept=".doc,.docx"
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-[#ff6a00] hover:file:bg-orange-100 transition-all cursor-pointer"
                />
                {errors.abstract && <p className="text-red-500 text-xs mt-1">{errors.abstract}</p>}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Affiliation (LUC /Other) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="affiliation"
                  value={formData.affiliation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500/20 focus:border-[#ff6a00] outline-none transition-all"
                />
                {errors.affiliation && <p className="text-red-500 text-xs mt-1">{errors.affiliation}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Abstract Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="abstractTitle"
                  value={formData.abstractTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500/20 focus:border-[#ff6a00] outline-none transition-all"
                />
                {errors.abstractTitle && <p className="text-red-500 text-xs mt-1">{errors.abstractTitle}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mobile No. <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500/20 focus:border-[#ff6a00] outline-none transition-all"
                />
                {errors.mobileNo && <p className="text-red-500 text-xs mt-1">{errors.mobileNo}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  You would be attending the conference <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-6 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="attPhys"
                      name="attendanceMode"
                      value="Physically"
                      checked={formData.attendanceMode === "Physically"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#ff6a00] focus:ring-[#ff6a00]"
                    />
                    <label htmlFor="attPhys" className="text-sm text-gray-700">Physically</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="attOnline"
                      name="attendanceMode"
                      value="Online"
                      checked={formData.attendanceMode === "Online"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#ff6a00] focus:ring-[#ff6a00]"
                    />
                    <label htmlFor="attOnline" className="text-sm text-gray-700">Online</label>
                  </div>
                </div>
                {errors.attendanceMode && <p className="text-red-500 text-xs mt-1">{errors.attendanceMode}</p>}
              </div>
            </div>
          </div>

          <hr className="my-8 border-gray-100" />

          <div className="bg-orange-50/50 p-4 rounded-lg border border-orange-100">
            <div className="text-orange-800 font-bold mb-2 flex items-center gap-2">
              Note<span className="text-red-500">*</span>
            </div>
            <div className="text-xs text-gray-600 leading-relaxed space-y-1">
              <p>Your abstract will undergo a double-blind peer review by the conference committee within two weeks from its receipt.</p>
              <p>Please make sure you complete the abstract using the template as provided on the website (Template).</p>
              <p className="font-semibold text-orange-700">Only Microsoft Word (.doc, .docx) file types are allowed to be uploaded.</p>
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <Button
              type="submit"
              variant="primary"
              className="px-10 py-3 rounded-full bg-[#ff6a00] hover:bg-[#e65f00] text-white font-bold transition-all shadow-md hover:shadow-lg"
            >
              Submit Form
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
