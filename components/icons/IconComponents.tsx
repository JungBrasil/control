
import React from 'react';

// FIX: Changed "aria-hidden" value from "true" to `true` to match the expected Booleanish type.
const iconProps = {
  className: "w-6 h-6",
  "aria-hidden": true,
};

export const BriefcaseIcon: React.FC<{className?: string}> = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.07a2.25 2.25 0 01-2.25 2.25h-13.5a2.25 2.25 0 01-2.25-2.25V6.32a2.25 2.25 0 012.25-2.25h.942c.495 0 .976.213 1.303.576l3.276 3.276a.75.75 0 001.06 0l3.276-3.276a1.875 1.875 0 011.303-.576h.942a2.25 2.25 0 012.25 2.25v4.07a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

export const MagnifyingGlassIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

export const ScaleIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-6.863 0c-.483-.174-.711-.703-.59-1.202L18.75 4.97zM5.25 4.97a48.416 48.416 0 016.75-.47c2.291 0 4.545.16 6.75.47m-13.5 0c-1.01.143-2.01.317-3 .52m3-.52l-2.62 10.726c-.122.499.106 1.028.589 1.202a5.988 5.988 0 006.863 0c.483-.174-.711-.703.59-1.202L5.25 4.97z" />
  </svg>
);

export const ChatBubbleLeftRightIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72-2.034a1.125 1.125 0 00-1.294.928v4.032c0 .812-.915 1.464-1.908.972L9.6 18.932c-.528-.26-.955-.838-1.125-1.445l-1.993-5.624a1.125 1.125 0 01.39-1.338l4.5-3.25a1.125 1.125 0 011.338.39l1.993 5.624a1.125 1.125 0 001.294.928l3.72 2.034-3.72-2.034a1.125 1.125 0 00-1.294.928V8.511zM11.25 12.138v-2.083M15.75 12.138v-2.083" />
  </svg>
);

export const DocumentChartBarIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.5h-3.031a1.5 1.5 0 01-1.5-1.5V16.5m0 0a1.5 1.5 0 001.5 1.5h3.031m0 0v-6.375a1.5 1.5 0 00-1.5-1.5H9.75m0 0a1.5 1.5 0 01-1.5-1.5V5.625m0 0a1.5 1.5 0 00-1.5-1.5H4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h3.75m0-12.75h.008v.008h-.008v-.008z" />
  </svg>
);

export const ClockIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className || "w-6 h-6"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const UsersIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className || "w-6 h-6"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.51.056 1.02.086 1.5.086s.99-.03 1.5-.086m-7.5 0a48.667 48.667 0 00-7.5 0m7.5 0a9.094 9.094 0 01-1.72-3.742 3 3 0 01.056-2.034m1.72 5.776a3 3 0 00-3.296-2.962 3 3 0 00-1.025 5.162 3 3 0 003.296 2.962m0-5.162a3 3 0 011.025-5.162 3 3 0 013.296 2.962m0-2.962a3 3 0 01-1.025 5.162 3 3 0 01-3.296-2.962m14.354-5.162a3 3 0 00-3.296-2.962 3 3 0 00-1.025 5.162 3 3 0 003.296 2.962m0-5.162a3 3 0 011.025-5.162 3 3 0 013.296 2.962M7.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm12 0a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
    </svg>
);

export const BookOpenIcon: React.FC<{className?: string}> = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
);

export const UserGroupIcon: React.FC<{className?: string}> = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.51.056 1.02.086 1.5.086s.99-.03 1.5-.086m-7.5 0a48.667 48.667 0 00-7.5 0m7.5 0a9.094 9.094 0 01-1.72-3.742 3 3 0 01.056-2.034m1.72 5.776a3 3 0 00-3.296-2.962 3 3 0 00-1.025 5.162 3 3 0 003.296 2.962m0-5.162a3 3 0 011.025-5.162 3 3 0 013.296 2.962m0-2.962a3 3 0 01-1.025 5.162 3 3 0 01-3.296-2.962m14.354-5.162a3 3 0 00-3.296-2.962 3 3 0 00-1.025 5.162 3 3 0 003.296 2.962m0-5.162a3 3 0 011.025-5.162 3 3 0 013.296 2.962M7.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm12 0a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" /></svg>
);

export const ChartPieIcon: React.FC<{className?: string}> = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 100 15h8.25a7.5 7.5 0 100-15H10.5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);

export const ShieldCheckIcon: React.FC<{className?: string}> = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg>
);

export const ExclamationTriangleIcon: React.FC<{className?: string}> = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
);

export const BanknotesIcon: React.FC<{className?: string}> = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.75A.75.75 0 013 4.5h.75m0 0h.75A.75.75 0 015.25 6v.75m0 0v-.75A.75.75 0 015.25 4.5h-.75m0 0a.75.75 0 01.75.75v.75m0 0h.75a.75.75 0 01.75.75v.75m.75 0v-.75A.75.75 0 018.25 6h.75m0 0h.75a.75.75 0 01.75.75v.75m0 0v-.75a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75V6m0 0v.75m0 0h.75a.75.75 0 01.75.75v.75m0 0v-.75a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75h.75a.75.75 0 01.75.75v.75m2.25-4.5h-.75a.75.75 0 00-.75.75v.75m0 0v.75a.75.75 0 01-.75.75h-.75m0 0H9.75m0 0a.75.75 0 01-.75.75V15m0 0a.75.75 0 00-.75.75v.75m0 0a.75.75 0 01-.75.75H4.5m0 0a.75.75 0 01-.75-.75v-.75m0 0a.75.75 0 00-.75.75v.75m-1.5-3v.75a.75.75 0 01-.75.75h-.75m0 0a.75.75 0 01-.75-.75v-.75m0 0a.75.75 0 00-.75.75v.75m0 0h.75a.75.75 0 00.75-.75V15m0 0V9.75m0 0A.75.75 0 013 9h.75m0 0a.75.75 0 00.75-.75V6m0 0h.75a.75.75 0 00.75-.75V4.5m0 0h.75a.75.75 0 01.75.75v.75m0 0a.75.75 0 00.75.75h.75a.75.75 0 00.75-.75V6.75m0 0h.75a.75.75 0 00.75-.75V4.5m0 0h.75a.75.75 0 01.75.75v.75m0 0a.75.75 0 00.75.75h.75a.75.75 0 00.75-.75V6m0 0h1.5a.75.75 0 00.75-.75V4.5m0 0h.75a.75.75 0 01.75.75v.75m0 0a.75.75 0 00.75.75h.75a.75.75 0 00.75-.75V6.75m-3-2.25a.75.75 0 00-.75.75v.75m0 0a.75.75 0 01-.75.75h-.75m0 0V9.75m0 0a.75.75 0 00-.75.75v.75M12 15v.75a.75.75 0 01-.75.75H9.75m0 0a.75.75 0 01-.75-.75V9.75m0 0a.75.75 0 00-.75.75v.75m3 3a.75.75 0 00.75-.75v-.75m0 0a.75.75 0 01.75-.75h.75m0 0a.75.75 0 00.75.75v.75m0 0a.75.75 0 01.75.75h.75m0 0a.75.75 0 00.75.75v.75m-3-3a.75.75 0 01.75-.75h.75" /></svg>
);

export const ClipboardDocumentListIcon: React.FC<{className?: string}> = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75c0-.231-.035-.454-.1-.664M6.75 7.5H18a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 18.75V9.75A2.25 2.25 0 016.75 7.5z" /></svg>
);

export const DocumentCheckIcon: React.FC<{className?: string}> = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

export const GavelIcon: React.FC<{className?: string}> = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.333 2.002a1.2 1.2 0 00-1.2 1.2v2.4a1.2 1.2 0 001.2 1.2h1.2v13.2a1.2 1.2 0 001.2 1.2h12a1.2 1.2 0 001.2-1.2v-1.2h1.2a1.2 1.2 0 001.2-1.2V9.802a1.2 1.2 0 00-1.2-1.2h-4.8v-6a1.2 1.2 0 00-1.2-1.2h-8.4zm1.2 3.6h6v-2.4h-6v2.4z" /></svg>
);

export const HandshakeIcon: React.FC<{className?: string}> = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664l.143.258a1.125 1.125 0 01-.11 1.588l-1.38.92a1.125 1.125 0 01-1.555-.832l-.42-.945a2.25 2.25 0 00-1.724-1.411l-.175-.032a1.125 1.125 0 01-.849-1.231l.02-.215a2.25 2.25 0 011.523-2.176l.47-.156a2.25 2.25 0 001.623-2.254l-.018-.475a1.125 1.125 0 01.98-1.124l.172-.032a1.125 1.125 0 011.124.98l.018.475c.01.22.02.44.03.66a1.125 1.125 0 01-1.096 1.144l-.242.024a1.125 1.125 0 00-.884.795l-.01.05a1.125 1.125 0 00.293 1.176l.13.109a1.125 1.125 0 001.21.056l.242-.121a1.125 1.125 0 011.156-.093l.242.121a1.125 1.125 0 001.156.093l.242-.121a1.125 1.125 0 011.156-.093l.242.121a1.125 1.125 0 001.156.093l.242-.121a1.125 1.125 0 011.156-.093l.242.121a1.125 1.125 0 001.156.093l.242-.121a1.125 1.125 0 011.156-.093l.242.121a1.125 1.125 0 001.156.093L21 12.03v.568c0 .334-.148.65-.405.864l-1.068.89c-.442.369-.535 1.01-.216 1.49l.51.766a2.25 2.25 0 011.161.886l.143.048a1.107 1.107 0 00.57 1.664l-.143.258a1.125 1.125 0 01.11 1.588l1.38.92a1.125 1.125 0 011.555-.832l.42-.945a2.25 2.25 0 001.724-1.411l.175-.032a1.125 1.125 0 01.849-1.231l-.02-.215a2.25 2.25 0 01-1.523-2.176l-.47-.156a2.25 2.25 0 00-1.623-2.254l.018-.475a1.125 1.125 0 01-.98-1.124l-.172-.032a1.125 1.125 0 01-1.124-.98L18 3.03z" /></svg>
);

export const LifebuoyIcon: React.FC<{className?: string}> = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.463-.066-.934-.1-1.412-.1C4.383 3.736 0 7.12 0 12s4.383 8.264 9.938 8.264c.478 0 .95-.034 1.412-.1M12.65 20.164c.463.066.934.1 1.412.1 5.555 0 9.938-3.384 9.938-8.264s-4.383-8.264-9.938-8.264c-.478 0-.95.034-1.412.1M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);

export const MegaphoneIcon: React.FC<{className?: string}> = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502" /></svg>
);

export const InformationCircleIcon: React.FC<{className?: string}> = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>
);

export const LightBulbIcon: React.FC<{className?: string}> = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311l-3.75 0M12 21a9 9 0 110-18 9 9 0 010 18z" /></svg>
);

export const AcademicCapIcon: React.FC<{className?: string}> = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path d="M12 14.25a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 3.545A2.25 2.25 0 0115 2.25h1.5a2.25 2.25 0 012.25 2.25v1.5A2.25 2.25 0 0116.5 7.5h-1.5a2.25 2.25 0 01-2.25-2.25v-1.5z" /></svg>
);

export const PresentationChartLineIcon: React.FC<{className?: string}> = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3M3.75 21h16.5M16.5 3.75h.008v.008h-.008V3.75z" /></svg>
);

export const ShareIcon: React.FC<{className?: string}> = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 100-2.186m0 2.186c-.18.324-.283.696-.283 1.093s.103.77.283 1.093m-9.566-7.5a2.25 2.25 0 100-2.186m0 2.186c.18-.324.283-.696.283-1.093s-.103-.77-.283-1.093z" /></svg>
);

export const CpuChipIcon: React.FC<{className?: string}> = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5M19.5 8.25H21M19.5 12H21M19.5 15.75H21M15.75 21v-1.5m-7.5-1.5h7.5M12 18.75a1.125 1.125 0 01-1.125-1.125v-6.25c0-.621.504-1.125 1.125-1.125h.007a1.125 1.125 0 011.125 1.125v6.25a1.125 1.125 0 01-1.125 1.125h-.007zM12 3.75a1.125 1.125 0 01-1.125-1.125V2.25c0-.621.504-1.125 1.125-1.125h.007a1.125 1.125 0 011.125 1.125v.375a1.125 1.125 0 01-1.125 1.125h-.007z" /></svg>
);

export const XMarkIcon: React.FC<{className?: string}> = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const SparklesIcon: React.FC<{className?: string}> = ({className}) => (
  <svg {...iconProps} className={className || iconProps.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.573L16.5 21.75l-.398-1.177a3.375 3.375 0 00-2.456-2.456L12.5 17.25l1.177-.398a3.375 3.375 0 002.456-2.456L16.5 13.5l.398 1.177a3.375 3.375 0 002.456 2.456L20.25 18l-1.177.398a3.375 3.375 0 00-2.456 2.456z" />
  </svg>
);
