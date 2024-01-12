import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ReportContextProps {
  children: ReactNode;
}

interface ReportContextValue {
  sendId: string | null;
  setsendId: (id: string | null) => void;
}

const ReportContext = createContext<ReportContextValue | undefined>(undefined);

export const ReportProvider: React.FC<ReportContextProps> = ({ children }) => {
  const [sendId, setsendId] = useState<string | null>(null);

  return (
    <ReportContext.Provider value={{ sendId, setsendId }}>
      {children}
    </ReportContext.Provider>
  );
};

export const useReport = () => {
  const context = useContext(ReportContext);
  if (!context) {
    throw new Error('useReport must be used within an ReportProvider');
  }
  return context;
};
