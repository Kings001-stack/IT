"use client";
import React, { useEffect, useState } from "react";
import { SquigglyLine } from "@/components/ui/SquigglyLine";
import { ErrorState } from "@/components/ui/ErrorState";
import { FeeCard } from "./FeeCard";
import { Info, AlertCircle, TrendingDown, CreditCard } from "lucide-react";

export const RegistrationFeeContent: React.FC = () => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    console.log("[RegistrationFeeContent] Initializing pricing feature...");
    try {
      // Simulate data or resource loading
      console.log("[RegistrationFeeContent] Registration UI ready");
    } catch (error) {
      console.error("[RegistrationFeeContent] Initialization failed:", error);
      setHasError(true);
    }
  }, []);

  if (hasError) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <ErrorState
          title="Price Loading Error"
          message="We couldn't load the registration fee details. Please refresh or contact support."
          onRetry={() => {
            console.log("[RegistrationFeeContent] Retrying layout mount...");
            setHasError(false);
          }}
        />
      </div>
    );
  }

  return (
    <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16 mx-auto">
      {/* Header Section */}
      <div className="mb-12 text-center lg:text-left">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
          Registration{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e26955] to-orange-600">
            Fee
          </span>
        </h1>
        <div className="flex justify-center lg:justify-start">
          <SquigglyLine />
        </div>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl leading-relaxed">
          Join leading experts at ICETMTSHS 2026. Browse our registration tiers 
          designed for delegates, scholars, and students.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <FeeCard
          category="Delegates"
          subCategory="Presenters and Participants"
          malaysianFee="750"
          internationalFee="200"
          iconType="delegate"
        />
        <FeeCard
          category="Research Scholar"
          subCategory="Including PhD Scholars"
          malaysianFee="600"
          internationalFee="150"
          iconType="scholar"
        />
        <FeeCard
          category="Student"
          subCategory="Masters and Bachelor Level"
          malaysianFee="500"
          iconType="student"
        />
      </div>

      {/* Policy & Important Notes Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Transaction Fees */}
        <div className="bg-orange-50/50 rounded-2xl border border-orange-100 p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-600 flex-shrink-0">
              <CreditCard size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                International Transaction Fee
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="text-[#e26955] font-bold text-lg leading-none">*</span> 
                International participants are kindly requested to add 
                <span className="font-bold text-gray-900 mx-1">US$10</span> 
                as a mandatory transaction fee for all cross-border wire transfers and payments.
              </p>
            </div>
          </div>
        </div>

        {/* Waivers & Discounts */}
        <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#e26955] flex-shrink-0">
              <TrendingDown size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Economic Waiver Programs
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                We are committed to inclusive participation. A 
                <span className="font-bold text-gray-900 mx-1 text-base">25% waiver</span> 
                on registration fees is available for participants from 
                <span className="italic">Lower-Middle Income Economies</span>.
              </p>
              <div className="flex items-center gap-2 text-[#e26955] font-bold text-xs uppercase tracking-widest cursor-pointer hover:underline">
                <Info size={16} />
                View Eligible Economies List
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Peer Review Note */}
      <div className="mt-12 flex items-center gap-3 justify-center p-4 bg-orange-50/30 rounded-full border border-orange-100/50">
        <AlertCircle size={18} className="text-orange-500" />
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-tighter">
          Registration fees include conference materials and journal review processing
        </p>
      </div>
    </div>
  );
};
