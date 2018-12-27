
const getStudentDetails = (studentID) => {
    return {
        studentId: studentID,
        name: {
            firstName: 'Kutti',
            middleName: 'Raja',
            lastName: 'V'
        },
        dob: new Date('12/12/1983'),
        email: 'kutti@gmail.com',
        gender: 'M',
        address: {
            addressline1: '3107 SW Deerfield',
            addressline2: 'Apt2',
            city: 'Bentonville',
            zipCode: 72713,
            state: 'AR'
        }
    }
};

const getAllStudentDetails = (pageSize, index) => {
    return [
        {
            studentId: 1,
            name: {
                firstName: 'Kutti',
                middleName: 'Raja',
                lastName: 'V'
            },
            dob: new Date('12/12/1983'),
            email: 'kutti@gmail.com',
            gender: 'M',
            address: {
                addressline1: '3107 SW Deerfield',
                addressline2: 'Apt2',
                city: 'Bentonville',
                zipCode: 72713,
                state: 'AR'
            }
        },
        {
            studentId: 2,
            name: {
                firstName: 'Krishna',
                middleName: 'Kumar',
                lastName: 'S'
            },
            dob: new Date('11/12/1983'),
            email: 'Krishna@gmail.com',
            gender: 'M',
            address: {
                addressline1: '3107 SW Deerfield',
                addressline2: 'Apt2',
                city: 'Bentonville',
                zipCode: 72713,
                state: 'AR'
            }
        },
        {
            studentId: 3,
            name: {
                firstName: 'Vaidy',
                middleName: 'Venkata',
                lastName: 'S'
            },
            dob: new Date('12/12/1984'),
            email: 'vaidy@gmail.com',
            gender: 'M',
            address: {
                addressline1: '3107 SW Deerfield',
                addressline2: 'Apt2',
                city: 'Bentonville',
                zipCode: 72713,
                state: 'AR'
            }
        },
        {
            studentId: 4,
            name: {
                firstName: 'Shon',
                middleName: 'Osp',
                lastName: 'E'
            },
            dob: new Date('12/01/1990'),
            email: 'Shon@gmail.com',
            gender: 'F',
            address: {
                addressline1: '3001 SW Deerfield',
                addressline2: '11',
                city: 'Bentonville',
                zipCode: 72713,
                state: 'AR'
            }
        }
    ]
}

export default { getStudentDetails , getAllStudentDetails };
