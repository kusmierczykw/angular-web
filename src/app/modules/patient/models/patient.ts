import { PatientStatus } from '@modules/patient/components/patient-status/enums/patient-status';

export class Patient {
  public constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly age: number,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly status: PatientStatus,
    public readonly blocked: boolean,
    public readonly amount: number,
  ) {}
}
