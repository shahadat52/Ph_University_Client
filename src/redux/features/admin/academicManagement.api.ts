import { baseApi } from "../../api/baseApi"

const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemester: builder.query({
            query: () => ({
                url: '/academic-semester',
                method: 'GET'
            })
        })
    })
})

export const { useGetAllSemesterQuery } = academicManagementApi