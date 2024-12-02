import { create } from "zustand"
import { organization } from "./types/BackendTypes"
import axios from "axios";

type OrganizationStore = {
    orgs: organization[];
    setOrgs: (org: organization) => void;
    createOrg: (name: string, orgType: string, owner: string) => void;
}


export const useOrganizationStore = create<OrganizationStore>((set, get) => ({
    orgs: [],
    setOrgs: (org: organization) => {
        console.log("runnning")
        if(!get().orgs.filter((item) => {return item.id === org.id})[0]){
            set({
                orgs: [...get().orgs, org]
            })
            console.log(get().orgs)
        }   
    },
    createOrg: async (name: string, orgType: string, owner: string) => {
        try {
            const { data } = await axios.post("http://localhost:3000/createOrg", {
               name,
               orgType,
               owner 
            })
            if(!data){
                console.log("Failed to get data")
            }
            console.log(data)
        } catch (error: any) {
            throw new Error(error)
        }
    }
}))


