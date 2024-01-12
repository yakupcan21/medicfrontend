import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextProps {
  children: ReactNode;
}

interface AuthContextValue {
  userId: string | null;
  isDoctor: boolean;
  isPatient: boolean;
  isAdmin: boolean;
  setUserId: (id: string | null) => void;
  setIsDoctor: (value: boolean) => void;
  setIsPatient: (value: boolean) => void;
  setIsAdmin: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(localStorage.getItem('userId'));
  const [isDoctor, setIsDoctor] = useState<boolean>(false);
  const [isPatient, setIsPatient] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    // Sayfa yenilendiğinde veya uygulama ilk yüklendiğinde local storage'den kullanıcı bilgilerini çek
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }

    const storedIsDoctor = localStorage.getItem('isDoctor');
    if (storedIsDoctor) {
      setIsDoctor(storedIsDoctor === 'true');
    }

    const storedIsPatient = localStorage.getItem('isPatient');
    if (storedIsPatient) {
      setIsPatient(storedIsPatient === 'true');
    }

    const storedIsAdmin = localStorage.getItem('isAdmin');
    if (storedIsAdmin) {
      setIsAdmin(storedIsAdmin === 'true');
    }
  }, []); // Sadece ilk render'da çalışması için boş dependency array kullandık

  const setCookie = (name: string, value: string, minutes: number) => {
    const date = new Date();
    date.setTime(date.getTime() + minutes * 60 * 1000);
    const expires = '; expires=' + date.toUTCString();
    document.cookie = name + '=' + value + expires + '; path=/';
  };

  const getCookie = (name: string) => {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  const eraseCookie = (name: string) => {
    document.cookie = name + '=; Max-Age=-99999999;';  
  };

  const setUserIdWrapper = (id: string | null) => {
    setUserId(id);
    if (id) {
      setCookie('userId', id, 20); // 20 dakika sonra çerezin süresi dolacak
    } else {
      eraseCookie('userId');
    }
  };

  const setIsDoctorWrapper = (value: boolean) => {
    setIsDoctor(value);
    localStorage.setItem('isDoctor', value.toString());
  };

  const setIsPatientWrapper = (value: boolean) => {
    setIsPatient(value);
    localStorage.setItem('isPatient', value.toString());
  };

  const setIsAdminWrapper = (value: boolean) => {
    setIsAdmin(value);
    localStorage.setItem('isAdmin', value.toString());
  };

  return (
    <AuthContext.Provider value={{ userId, isDoctor, isPatient, isAdmin, setUserId: setUserIdWrapper, setIsDoctor: setIsDoctorWrapper, setIsPatient: setIsPatientWrapper, setIsAdmin: setIsAdminWrapper }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
