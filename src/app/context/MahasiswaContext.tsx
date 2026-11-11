import React, { createContext, useContext, useState } from "react";

export interface MahasiswaItem {
  id: string;
  nim: string;
  nama: string;
  prodi: string;
  angkatan: string;
  noHp: string;
  status: "Aktif" | "Cuti";
}

interface MahasiswaContextType {
  mahasiswaList: MahasiswaItem[];
  tambahMahasiswa: (data: Omit<MahasiswaItem, "id">) => void;
}

const MahasiswaContext = createContext<MahasiswaContextType | undefined>(
  undefined,
);

export const MahasiswaProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mahasiswaList, setMahasiswaList] = useState<MahasiswaItem[]>([
    {
      id: "1",
      nim: "230101001",
      nama: "Ahmad Fauzi",
      prodi: "Teknik Informatika",
      angkatan: "2023",
      noHp: "081234567890",
      status: "Aktif",
    },
    {
      id: "2",
      nim: "230101002",
      nama: "Budi Santoso",
      prodi: "Sistem Informasi",
      angkatan: "2023",
      noHp: "082345678901",
      status: "Aktif",
    },
    {
      id: "3",
      nim: "230101003",
      nama: "Citra Dewi",
      prodi: "Teknik Informatika",
      angkatan: "2023",
      noHp: "083456789012",
      status: "Aktif",
    },
    {
      id: "4",
      nim: "230101004",
      nama: "Dedi Kurniawan",
      prodi: "Sistem Informasi",
      angkatan: "2022",
      noHp: "084567890123",
      status: "Cuti",
    },
    {
      id: "5",
      nim: "230101005",
      nama: "Eka Rahmawati",
      prodi: "Teknik Informatika",
      angkatan: "2023",
      noHp: "085678901234",
      status: "Aktif",
    },
  ]);

  const tambahMahasiswa = (data: Omit<MahasiswaItem, "id">) => {
    const newItem: MahasiswaItem = {
      id: Date.now().toString(),
      ...data,
    };
    setMahasiswaList((prev) => [newItem, ...prev]);
  };

  return (
    <MahasiswaContext.Provider value={{ mahasiswaList, tambahMahasiswa }}>
      {children}
    </MahasiswaContext.Provider>
  );
};

export const useMahasiswa = () => {
  const context = useContext(MahasiswaContext);
  if (!context) {
    throw new Error("useMahasiswa harus digunakan di dalam MahasiswaProvider");
  }
  return context;
};
