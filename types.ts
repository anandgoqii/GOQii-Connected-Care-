
export interface PatientData {
  id: string;
  name: string;
  age: number;
  condition: string;
  riskScore: number;
  vitals: {
    hr: number;
    bp: string;
    spo2: number;
    temp: number;
  };
  lastAlert: string;
}

export interface CareStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
