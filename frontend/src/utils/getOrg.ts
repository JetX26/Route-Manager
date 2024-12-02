import axios from "axios"
import { orgAxios } from "./types/BackendTypes"

const getOrgInfo = async (orgId: string) => {
    try {
        console.log(orgId)
        const { data }: { data: orgAxios } = await axios.post("http://localhost:3000/organizations/findOrg", { orgId })
        if (!data) {
            throw new Error()
        } else {
            if (!data.success) {
                console.log(data.error)
            } else return data.data
        }
    } catch (error: any) {
        throw new Error(error)
    }
}

export default getOrgInfo