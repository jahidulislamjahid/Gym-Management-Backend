export const studentFilterableFields: string[] = [
  'searchTerm',
  'studentId',
  'email',
];

export const studentSearchableFields: string[] = [
  'firstName',
  'lastName',
  'middleName',
  'email',
  'contactNo',
  'studentId',
];

export const studentRelationalFields: string[] = [
  'academicFacultyId',
  'academicDepartmentId',
  'academicSemesterId',
];
export const studentRelationalFieldsMapper: { [key: string]: string } = {
  academicFacultyId: 'academicFaculty',
  academicDepartmentId: 'academicDepartment',
  academicSemesterId: 'academicSemester',
};

export const ZodUserRoles = ['SUPER_ADMIN', 'ADMIN', 'USER', 'DOCTOR'];

export const UserSearchableFields: string[] = ['email'];

export const userRelationalFields: string[] = ['profileId'];
export const userRelationalFieldsMapper: { [key: string]: string } = {
  profileId: 'profileId',
};
export const userFilterableFields: string[] = [
  'searchTerm',
  'profileId',
  'email',
  'role',
];
