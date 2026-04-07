import React from "react";

export interface ContactBlockProps {
  label: string;
  names: string;
  emails: string;
}

export const ContactBlock: React.FC<ContactBlockProps> = ({
  label,
  names,
  emails,
}) => {
  return (
    <div className="space-y-4">
      <p className="text-gray-900 text-[17px]">{label}</p>
      <p className="text-gray-900 text-[17px]">{names}</p>
      <p className="text-gray-900 text-[17px]">
        {emails.includes('@') ? (
          <a href={`mailto:${emails.split('/')[0].replace('(', '')}`} className="hover:text-red-900 transition-colors">
            {emails}
          </a>
        ) : (
          emails
        )}
      </p>
    </div>
  );
};
